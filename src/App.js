import './Fonts/WEB/css/general-sans.css'
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
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
import Layout from './Layout';
import { Fragment } from 'react';
import Login from './Pages/Login';

function App() {

  const routes = [
    {
      path: "/home",
      element: Home,
      layout: Layout
    },
    {
      path: "/courses",
      element: Courses,
      layout: Layout
    },
    {
      path: "/tutorials",
      element: Tutorials,
      layout: Layout
    },
    {
      path: "/books",
      element: Books,
      layout: Layout
    },
    {
      path: "/tools",
      element: Tools,
      layout: Layout
    },
    {
      path: "/youtube-channels",
      element: YoutubeChannels,
      layout: Layout
    },
    {
      path: "/groups-forums",
      element: BloggingGroups,
      layout: Layout
    },
    {
      path: "/jobs",
      element: BloggingJobs,
      layout: Layout
    },
    {
      path: "/master-blogging",
      element: MasterBlogging,
      layout: Layout
    },
    {
      path: "/login",
      element: Login,
      layout: null
    },
    {
      path: "/",
      element: () => <Navigate to="/home" />,
    },
  ]

  return (
    <>
      <Routes>
        {routes?.map((route, index) => {
          const Layout = route?.layout || Fragment
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.element />
                </Layout>
              }
            />
          )
        }
        )}
      </Routes>
    </>
  );
}

export default App