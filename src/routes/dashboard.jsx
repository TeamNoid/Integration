// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
// Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
import Task1 from "views/Task1/task1.jsx";
import Task2 from "views/Task2/task2.jsx";
import Task3 from "views/Task3/task3.jsx";
import Task4 from "views/Task4/task4.jsx";
import Task5 from "views/Task5/task5.jsx";
import Task6 from "views/Task6/task6.jsx";
import Task7 from "views/Task7/task7.jsx";
import Task8 from "views/Task8/task8.jsx";
import Task9 from "views/Task9/task9.jsx";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
//import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Auditlogs from "views/Auditlogs/Auditlogs.jsx";
//import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
//import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
//import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/table",
    sidebarName: "Transaction Logs",
    navbarName: "Transaction Logs",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/auditlogs",
    sidebarName: "Audit Logs",
    navbarName: "Audit Logs",
    icon: "book",
    component: Auditlogs
  },
  {
    path: "/icons",
    sidebarName: "Visualizer",
    navbarName: "Visualizer",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/notifications",
    sidebarName: "Users",
    navbarName: "Users",
    icon: Person,
    component: NotificationsPage
  },
  {
    path: "/task1",
    sidebarName: "Task 1",
    navbarName: "Task 1",
    icon: "content_paste",
    component: Icons
  },

  {
    path: "/task2",
    sidebarName: "Task 2",
    navbarName: "Task 2",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/task3",
    sidebarName: "Task 3",
    navbarName: "Task 3",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/task4",
    sidebarName: "Task 4",
    navbarName: "Task 4",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/task5",
    sidebarName: "Task 5",
    navbarName: "Task 5",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/task6",
    sidebarName: "Task 6",
    navbarName: "Task 6",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/task7",
    sidebarName: "Task 7",
    navbarName: "Task 7",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/task8",
    sidebarName: "Task 8",
    navbarName: "Task 8",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/task9",
    sidebarName: "Task 9",
    navbarName: "Task 9",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/icons",
    sidebarName: "Visualizer",
    navbarName: "Visualizer",
    icon: BubbleChart,
    component: Icons
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
