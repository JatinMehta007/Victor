import { Link } from "react-router-dom";
import { Dots } from "../components/Dots";



export interface BlogCardProps {
    "authorName": string;
    "title" : string;
    "content" : string;
    //  publishedDate : string;
    "createdAt" : string;
    "id": number;
}

export const BlogCard =({
    id,  
    authorName,
    title,
    content,
}: BlogCardProps)=> {
  
      return <div>
      <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md">
        <div className="flex">   
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-orange-600 rounded-full w-6 h-6 mt-[5px]`}>
        <span  className = "text-white text-center font-light">{authorName[0]}</span>
    </div>

        
          <div className="font-light pl-2 text-md flex justify-center flex-col ">
          {authorName}   
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          
         <Dots id={id}/>
          
        </div>
        <Link to={`/blog/${id}`}>
        <div className="md:text-xl font-semibold pt-2">
         {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100) + "..."}
        </div>

      </Link>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {/* if content charater is lees then 100 words then it will take 1 min */}
            {`${Math.ceil(content.length / 100)} minutes(s)read`}
        </div>
      </div>
      </div>
}

export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-400">

    </div>
}
