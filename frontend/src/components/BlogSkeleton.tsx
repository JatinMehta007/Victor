import { Circle } from "../pages/BlogCard"

export const BlogSkeleton = () =>{

return <div role="status" className="animate-pulse">
    <div className="border-b border-slate-100 pb-4p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">    
        <div className="h-2.5 bg-gray-100 rounded-full  w-40 mb-4"></div>
        <div className="h-2 bg-gray-100 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-100 rounded-full  mb-2.5"></div>

          <div className="font-extralight  pl-2 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-100 rounded-full  mb-2.5"></div>
  
          </div>
          <div className="flex justify-center flex-col pl-2 ">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
          <div className="h-2 bg-gray-100 rounded-full  mb-2.5"></div>

          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
        <div className="h-2 bg-gray-100 rounded-full  mb-2.5"></div>

        </div>
        <div className="text-md font-thin">
        <div className="h-2 bg-gray-100 rounded-full  mb-2.5"></div>

        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {/* if content charater is lees then 100 words then it will take 1 min */}
            <div className="h-2 bg-gray-100 rounded-full  mb-2.5"></div>

        </div>
        
      </div>
    <span className="sr-only">Loading...</span>
</div>

 

}