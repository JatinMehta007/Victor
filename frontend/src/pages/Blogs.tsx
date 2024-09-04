import { AppBar } from "../components/AppBar"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/useFetchVictor";

import { BlogCard } from "./BlogCard"

export const Blogs = () => {
      //store it in a state
      // store it directly here
      // store it in a context variables????
      // create our own custom hooks called useBlogs
      const {loading , blogs} = useBlogs();
      if(loading){
        return <div>
        <AppBar/> 
         <div className="flex justify-center">
          <div >
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
            
           </div>
        </div>
      </div>
      }
      return (
       <div>
      <AppBar />  
      <div  className="flex justify-center">
      <div>
        {blogs.map(blog => <BlogCard 
             key={blog.id}
             id={blog.id}
             authorName={blog.author.name || "Anonymous"}
             title={blog.title}
             content={blog.content}
             createdAt={blog.createdAt}
               /> )}

             </div>
      </div>
        </div>
      )  
}