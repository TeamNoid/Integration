// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import BubbleChart from "@material-ui/icons/BubbleChart";

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






  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
