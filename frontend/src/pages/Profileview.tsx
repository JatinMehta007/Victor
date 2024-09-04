import { useAuthor } from "../assets/contexts/AuthorContext";
import { AppBar } from "../components/AppBar";

export const Profileview = () => {
  const { authorName } = useAuthor();
  const firstLetter = authorName ? authorName.charAt(0).toUpperCase() : "";

  return (
    <>
      <div>
        <AppBar />
      </div>
      <div className="grid grid-cols-5 gap-4 min-h-screen ">
        <div className="col-span-3 ">
          <div className="md:text-5xl text-3xl font-medium text-gray-900 md:ml-24 md:mt-20 w-40 ml-10">   
        <div
              className={`relative inline-flex items-center justify-center overflow-hidden bg-orange-600 rounded-full w-11 h-11 mt-6  md:hidden mr-6`}>
              <span className="text-white font-light text-sm ">
                {firstLetter}
              </span>
          </div>
                {authorName}
            </div>
            <button>

            <div className=" flex md:ml-24 ml-10 mt-10 under gap-10 border-b pb-[2px] md:w-[700px] w-[360px]   ">
                <p className="underline underline-offset-8  ">Home</p>
            <div >
            <p className="text-gray-700">About</p>
            </div>
            </div>
                </button>
                
            <div className="bg-gray-100 md:m-24 m-10 grid md:grid-cols-4 grid-row-4 md:w-auto  w-[360px] md:h-40 h-80 rounded-md">
             <div className="md:col-span-2 row-span-2 rounded-md">
              <div className="flex gap-4">
            <div
              className={`relative inline-flex items-center justify-center overflow-hidden bg-orange-600 rounded-full w-6 h-6 mt-6 ml-8`}>
              <span className="text-white font-light text-sm ">
                {firstLetter}
              </span>
          </div>
              <div>
          <div className="text-md mt-6 font-medium text-gray-800 h-14">
            {authorName}
              </div>
                </div>
            </div>
                <div className="md:mt-4 ml-8 ">
                  <p className="font-bold text-gray-800 text-lg">Reading list</p>
                </div>
                <div>
                  <p className="text-xs ml-8 mt-3 text-gray-600">No stories</p>
                </div>
             </div>
             <div className="md:col-span-2 h-32 md:h-40 row-span-2 bg-gray-200 ">  
                <div className="w-44 h-full  border-r-4 border-white">
              <div className="w-[270px] h-full  border-r-4 border-white">
                </div>
                </div>
             </div>
             
            </div>
            </div>


        <div className="border-l h-screen hidden md:inline-block ">
          <div>
            <div
              className={` relative inline-flex items-center justify-center overflow-hidden bg-orange-600 rounded-full w-24 h-24 mt-16 ml-16`}>
              <span className="text-white text-center font-light text-5xl ">
                {firstLetter}
              </span>
            </div>
          </div>
          <div className="text-xl  pl-24 pt-12 font-medium text-gray-800">
            {authorName}
          </div>
          <footer className="text-xs text-gray-400 pt-80 pl-8 w-96 ">Help Status About Careers Press Blog Privacy Terms Text to speech Teams</footer>
        </div>
      </div>
    </>
  );
};