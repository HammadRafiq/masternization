import './Fonts/WEB/css/general-sans.css'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Courses from './Pages/Courses/Index';
import Home from './Pages/Home/Index';
import Tutorials from './Pages/Tutorials/Index';
import Books from './Pages/Books/Index';
import Tools from './Pages/ToolsandResources/Index';
import YoutubeChannels from './Pages/YoutubeChannels/Index';
import BloggingGroups from './Pages/Groups/Index';
import BloggingJobs from './Pages/Jobs/Index';
import Footer from './Components/Footer/Footer';
import MasterBlogging from './Pages/MasterBlogging/Index';

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/courses" element={<Courses />}></Route>
    <Route path="/tutorials" element={<Tutorials />}></Route>
    <Route path="/books" element={<Books />}></Route>
    <Route path="/tools" element={<Tools />}></Route>
    <Route path="/youtube-channels" element={<YoutubeChannels />}></Route>
    <Route path="/groups-forums" element={<BloggingGroups />}></Route>
    <Route path="/jobs" element={<BloggingJobs />}></Route>
    <Route path="/master-blogging" element={<MasterBlogging />}></Route>
   </Routes>
   <Footer />
   </>
  );
}

export default App;
