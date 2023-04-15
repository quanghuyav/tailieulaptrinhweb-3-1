import Home from "../pages/home/Home";
import News from "../pages/news/News";
import DefaultPage from "../pages/defaultPage/DefaultPage";
import Admin from "../pages/admin/Admin";
import Courses from "../pages/courses/Courses";
import CoursesFree from "../pages/coursesFree/CoursesFree";

export const publicRoutes = [
    {path: "/", Component: Home},
    {path: "/news", Component: News},
    {path: "/home", Component : Home},
    {path: "/courses", Component: CoursesFree},
    {path: "*", Component: DefaultPage}
]
export const userRoutes = [
    {path: "/courses", Component: Courses},
]
export const adminRoutes = [
    {path: "/admin", Component: Admin},
    {path: "/courses", Component: Courses},
]