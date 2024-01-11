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
import Registration from './Pages/Registration/Index';
import Dashboard from './Pages/Dashboard/Index';
import DashboardLayout from './Layout/DashboardLayout';
import Users from './Pages/Dashboard/InnerPages/Users';
import AccountSettings from './Pages/Dashboard/InnerPages/AccountSettings';
import Creators from './Pages/Dashboard/InnerPages/Creators'
import SavedWorks from './Pages/Dashboard/InnerPages/SavedWorks'
import Content from './Pages/Dashboard/InnerPages/Content'
import GuestGuard from './Components/Auth/GuestGuard';
import AuthGuard from './Components/Auth/AuthGuard';
import Auth from './Components/Auth/Auth';


function App() {

  const routes = [
    {
      path: "/home",
      element: Home,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/dashboard/overview",
      element: Dashboard,
    },
    {
      path: "/dashboard/users",
      element: Users,
      layout: DashboardLayout
    },
    {
      path: "/dashboard/account-settings",
      element: AccountSettings,
      layout: DashboardLayout
    },
    {
      path: "/dashboard/creators",
      element: Creators,
      layout: DashboardLayout

    },
    {
      path: "/dashboard/saved-works",
      element: SavedWorks,
      layout: DashboardLayout
    },
    {
      path: "/dashboard/content",
      element: Content,
      layout: DashboardLayout
    },
    {
      path: "/courses",
      element: Courses,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/tutorials",
      element: Tutorials,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/books",
      element: Books,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/tools",
      element: Tools,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/youtube-channels",
      element: YoutubeChannels,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/groups-forums",
      element: BloggingGroups,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/jobs",
      element: BloggingJobs,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/master-blogging",
      element: MasterBlogging,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/login",
      element: Login,
      layout: null,
      guard: GuestGuard
    },
    {
      path: "/registration",
      element: Registration,
      layout: null,
      guard: GuestGuard
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
          const Guard = route?.guard || Fragment
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Guard>
                  <Layout>
                    <Auth>
                      <route.element />
                    </Auth>
                  </Layout>
                </Guard>
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