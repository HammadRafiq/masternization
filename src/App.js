import './Fonts/WEB/css/general-sans.css'
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Courses from './Pages/Courses/Index';
import Home from './Pages/Home/Index';
import Tutorials from './Pages/Tutorials/Index';
import Books from './Pages/Books/Index';
import Tools from './Pages/ToolsandResources/Index';
import YoutubeChannels from './Pages/YoutubeChannels/Index';
import BloggingGroups from './Pages/Groups/Index';
import BloggingJobs from './Pages/Jobs/Index';
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
import MyAccount from './Pages/MyAccount/Index';

import GuestGuard from './Components/Auth/GuestGuard';
import AuthGuard from './Components/Auth/AuthGuard';
import Auth from './Components/Auth/Auth';
import ListedContent from './Pages/Dashboard/InnerPages/ListedContent';
import AddMasterCourse from './Pages/Dashboard/InnerPages/AddMasterCourse';
import ListedMasterCourses from './Pages/Dashboard/InnerPages/ListedMasterCourses';
import AdminLogin from './Pages/Login/Admin';
import React, { useState, createContext } from 'react';
import AdminGuard from './Components/Auth/AdminGuard';

export const GlobalInfo = createContext();


function App() {

  const [globalMasterCourseId, setGlobalMasterCourseId] = useState('fahad123');

  const location = useLocation();

  const routes = [
    {
      path: "/home",
      element: Home,
      layout: Layout,
      guard: AuthGuard
    },
    {
      path: "/home-guest",
      element: Home,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/dashboard/overview",
      element: Dashboard,
      guard: AdminGuard
    },
    {
      path: "/dashboard/users",
      element: Users,
      layout: DashboardLayout,
      guard: AdminGuard
    },
    {
      path: "/dashboard/account-settings",
      element: AccountSettings,
      layout: DashboardLayout,
      guard: AdminGuard
    },
    {
      path: "/dashboard/creators",
      element: Creators,
      layout: DashboardLayout,
      guard: AdminGuard
    },
    {
      path: "/dashboard/saved-works",
      element: SavedWorks,
      layout: DashboardLayout,
      guard: AdminGuard
    },
    {
      path: "/dashboard/content",
      element: Content,
      layout: DashboardLayout,
      guard: AdminGuard
    },
    {
      path: "/dashboard/listed-works",
      element: ListedContent,
      layout: DashboardLayout,
      guard: AdminGuard
    },
    {
      path: "/dashboard/add-master-course",
      element: AddMasterCourse,
      layout: DashboardLayout,
      guard: AdminGuard
    },
    {
      path: "/dashboard/listed-master-courses",
      element: ListedMasterCourses,
      layout: DashboardLayout,
      guard: AdminGuard
    },
    {
      path: "/courses/:masterCourseId",
      element: Courses,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/tutorials/:masterCourseId",
      element: Tutorials,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/books/:masterCourseId",
      element: Books,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/tools/:masterCourseId",
      element: Tools,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/youtube-channels/:masterCourseId",
      element: YoutubeChannels,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/groups-forums/:masterCourseId",
      element: BloggingGroups,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/jobs/:masterCourseId",
      element: BloggingJobs,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/master-blogging/:masterCourseId",
      element: MasterBlogging,
      layout: Layout,
      guard: GuestGuard
    },
    {
      path: "/my-account",
      element: MyAccount,
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
      path: `/admin`,
      element: AdminLogin,
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
    {
      path: "/dashboard/edit-content/:contentId",
      element: Content,
      layout: DashboardLayout,
      guard: AdminGuard
    },
  ]

  return (
    <>
      <GlobalInfo.Provider value={{ globalMasterCourseId, setGlobalMasterCourseId }}>
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
      </GlobalInfo.Provider >
    </>
  );
}

export default App