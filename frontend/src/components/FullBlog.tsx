
import { Blog } from "../hooks/useFetchVictor";
import { AppBar } from "./AppBar";


export const FullBlog = ({ blog }: { blog: Blog }) => {
      
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    return date.toLocaleDateString(undefined, options);
  };
  
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 pt-10 md:max-w-screen-xl">
          <div className="col-span-8 ">
            <div className="md:text-5xl text-2xl font-extrabold w-screen pr-9 md:w-auto">{blog.title}</div>
            <div className="text-slate-500 pt-2">{formatDate(blog.createdAt)}</div>
            <div className="pt-4 w-screen pr-9 md:w-auto">{blog.content}</div>
          </div>
          <div className="col-span-4 ">
            <div className="text-slate-400 text-lg hidden md:inline-flex" >Author</div>
            <div className=" w-full hidden md:inline-flex">
              <div className="pr-4 flex flex-col justify-center mb-11 " >
                <div className="relative inline-flex items-center justify-center overflow-hidden bg-orange-600 rounded-full w-6 h-6  text-white text-center font-light">
                  {blog.author.name[0]}

                </div>
                
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-1 text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
                <div className="ml-auto">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
