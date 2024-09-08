import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useFetchVictor"
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { AppBar } from "../components/AppBar";

// atom family and selector family
export const Blog = () =>{
    const { id } = useParams();
     const { loading , blog} = useBlog({
        id: id || ""
     });
      
     if(loading){
        return <div>
      <AppBar />
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner/>
          </div>
        </div>
        </div>
     }

     if (!blog) {
      return <div>Error: Blog not found</div>;
    }
    return <div>
      
      <FullBlog blog={blog}  />
    </div>
      
}