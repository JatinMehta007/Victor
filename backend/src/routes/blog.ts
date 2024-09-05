
import { createBlogInput, updateBlogInput } from '@mrcricket/medium-common';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from "hono";
import { verify } from 'hono/jwt';

 export const blogRouter= new Hono<{
    Bindings :{
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables:{
      userId : string
      prisma : PrismaClient,
    }
}>()


    blogRouter.use("/*",async (c , next) => {
         const authHeader = c.req.header("Authorization") || "";
         try{
           const user = await verify(authHeader,c.env.JWT_SECRET);
           
            if(user){
              c.set('userId', user.id);
              await next();
            } else{
              c.status(403)
              return c.json({
                  msg:"you are not logged in"
              })
            }
         } catch(error){
          console.log("error during authentication", error)
           c.status(500)          
          return c.json({
              msg:"internal server error"
          })
         }
    })

    blogRouter.use("/*", async(c,next)=>{
      const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate()) as unknown as PrismaClient;

      c.set('prisma',prisma)
      await next();
    })

     blogRouter.post('/blog', async (c) => {
        const body = await c.req.json();
        const {success} = createBlogInput.safeParse(body);
        if(!success){
          c.status(411);
          return c.json({
            msg:"Inputs not correct"
          })
        }
        const authorId = c.get("userId");
        const prisma = c.get("prisma");
   const blog =  await prisma.blog.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: parseInt(authorId)
        }
     });

     return c.json({
        id:blog.id
     })

  })
  
    
    blogRouter.put('/blog', async (c) => {
        const body = await c.req.json();
        const {success} = updateBlogInput.safeParse(body);
        if(!success){
          c.status(411);
          return c.json({
            msg:"Inputs not correct"
          })
        }
        const prisma = c.get("prisma");
   const blog =  await prisma.blog.update({
       where:{
           id: body.id
       },    
         data:{
            title: body.title,
            content: body.content,
            
        }
     });

     return c.json({
        id:blog.id
     })

  })
  
  // pagination means that the user when run the request to the postman then it will give only 10 blogs then if you refresh it then it will give you a another 10 blogs
        blogRouter.get('/bulk',async (c) => {
          const prisma = c.get("prisma"); 
      const blogs =  await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author:{
              select:{
                name:true 
              }
            }
        }
      })
      

      return c.json({
        blogs
      })
      })




        
      blogRouter.post('/newblog', async (c) => {
        const body = await c.req.json();
        const {success} = createBlogInput.safeParse(body);
        if(!success){
          c.status(411);
          return c.json({
            msg:"Inputs not correct"
          })
        }
        const authorId = c.get("userId");
        const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

      const newblog =  await prisma.blog.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: parseInt(authorId)
        }
      });

      return c.json({
        id:newblog.id
      })

      })


      blogRouter.delete('/:id',async (c) => {
        const id = c.req.param("id");
        const userId = c.get("userId");
        const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      try{

        const blog =  await prisma.blog.findFirst({
          where:{
              id:Number(id)
          },select:{
            authorId: true,
            author:{
              select:{
                name:true
              }
            }
          }
        })
        if (!blog) {
          c.status(404); // Not found
          return c.json({
            msg: "Blog not found",
          });
        }
      if(blog.authorId !== Number(userId)){
        c.status(403); // Forbidden
        return c.json({
          msg: "You are not authorized to delete this blog",
        });

      }
        await prisma.blog.delete({
          where: {
            id: Number(id),
          }
        })

        return c.json({
          msg: "Blog deleted successfully",
        });
      } catch(e){
        c.status(500); //  
        return c.json({
            msg: "Error while deleting the data"
        })
      }
      })


      blogRouter.get('/mydata', async(c)=>{
        const userId = c.get('userId');

        if (!userId) {
          c.status(401); 
          return c.json({
            message: "Unauthorized access",
          });
        }

        const prisma = c.get("prisma");  
        try{
          const myInfo = await prisma.user.findFirst({
            where : {
                id : Number(userId) 
            }, select:{
              id:true,
              name:true,
              username: true
            }
          })
      if (!myInfo) {
            c.status(404); 
            return c.json({
              message: "User not found",
            });
          }

          return c.json({
            myInfo
          })
        }catch (error) {
          console.error("Error fetching user info:", error); // Log the detailed error
          c.status(500); // Internal server error
          return c.json({
            message: "Internal server error",
          }); 
      }
      })

      blogRouter.get("/myProfile",async (c)=>{
        const prisma = c.get("prisma");
        const author_Id = c.get('userId');

        try{
          const myInfo = await prisma.user.findFirst({
            where : {
              id: Number(author_Id)
            }, select:{
              id : true,
              name: true,
              username:true
            }
          })
          const myVictor = await prisma.blog.findMany({
            where:{
              authorId: Number(author_Id)
            }, select : {
              id : true,
              content : true,
              title : true,
              author : {
                select : {
                  name : true
                }
              }
            }
          })
        return c.json({
          myInfo,myVictor
        })
        } catch(error){
          console.log(`Error while fetching columns`, error)
                  c.status(500)
                  return c.json({
                      message : "Internal server error"
          })
        }
      })

        blogRouter.get('/:id',async (c) => {
          const id = c.req.param("id");
          const prisma = c.get("prisma");try{

          const blog =  await prisma.blog.findFirst({
            where:{
                id:Number(id)
            },
            select:{
              title: true,
              content :true,
              createdAt:true,
              author:{
                select:{
                  name:true
                }
              }
            }    
          })
          
          return c.json({
              blog
          })
      } catch(e){
          c.status(404); //  
          return c.json({
              msg: "Error while fetching the data id"
          })
      }
      })
