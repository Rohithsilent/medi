
// THIS FILE IS AUTOGENERATED WHEN PAGES ARE UPDATED
import { lazy } from "react";
import { RouteObject } from "react-router";


import { UserGuard } from "app";


const App = lazy(() => import("./pages/App.tsx"));
const CompleteProfile = lazy(() => import("./pages/CompleteProfile.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Logout = lazy(() => import("./pages/Logout.tsx"));
const Profile = lazy(() => import("./pages/Profile.tsx"));
const Register = lazy(() => import("./pages/Register.tsx"));

export const userRoutes: RouteObject[] = [

	{ path: "/", element: <App />},
	{ path: "/complete-profile", element: <UserGuard><CompleteProfile /></UserGuard>},
	{ path: "/completeprofile", element: <UserGuard><CompleteProfile /></UserGuard>},
	{ path: "/dashboard", element: <UserGuard><Dashboard /></UserGuard>},
	{ path: "/login", element: <Login />},
	{ path: "/logout", element: <UserGuard><Logout /></UserGuard>},
	{ path: "/profile", element: <UserGuard><Profile /></UserGuard>},
	{ path: "/register", element: <UserGuard><Register /></UserGuard>},

];
