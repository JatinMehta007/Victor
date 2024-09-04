
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { Publish } from './pages/Publish';
import { NewBlog } from './pages/NewBlog';
import { AuthorProvider } from './assets/contexts/AuthorContext';
import { Profileview } from './pages/Profileview';


function App() {

  return (
    <>   
     <BrowserRouter>
     <Routes>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/signin" element={<Signin/>}></Route>
     <Route path="/blog/:id" element={<AuthorProvider><Blog/></AuthorProvider>}></Route>
      <Route path="/blogs" element={<AuthorProvider><Blogs/></AuthorProvider>}></Route>
      <Route path='/newblog' element={<AuthorProvider><NewBlog/></AuthorProvider>}/>
      <Route path='/publish' element={<AuthorProvider><Publish/></AuthorProvider>}></Route>
      <Route path='/profile' element={<AuthorProvider><Profileview/></AuthorProvider>}></Route>
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
