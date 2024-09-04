import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

export const AppBar = () => {
  
  
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className="flex flex-col justify-center cursor-pointer font-mono text-xl md:text-3xl font-medium hover:text-slate-600">
        <Link to={"/blogs"}>VICTOR</Link>
      </div>
      <div className="flex justify-around">
        <Link to={`/publish`}>
          <button
            type="button"
            className="flex mr-6 font-normal md:text-lg text-sm text-center p-2 text-gray-700 hover:text-gray-500  "
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:size-8 size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <p className="pl-2 ">
            New
            </p>
          </button>
        </Link>
          
          <div>
            <Dropdown/>
          </div>
             </div>
    </div>
  );
};
