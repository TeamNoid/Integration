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
  {
    path: "/task1",
    sidebarName: "Task 1",
    navbarName: "Task 1",
    icon: "content_paste",
    component: Task1
  },

  {
    path: "/task2",
    sidebarName: "Staffing and Identification",
    navbarName: "Health Care Staffing and Identification of HIV positive clients",
    icon: "content_paste",
    component: Task2
  },
  {
    path: "/task3",
    sidebarName: "HCW staffing-HIV Clients",
    navbarName: "HCW staffing numbers and successful initiation of HIV clients into the ART program",
    icon: "content_paste",
    component: Task3
  },
  {
    path: "/task4",
    sidebarName: "Task 4",
    navbarName: " Correlation between health care worker training, and successful initiation of HIV clients into the ART program",
    icon: "content_paste",
    component: Task4
  },
  {
    path: "/task5",
    sidebarName: "HCW- training- ARVs",
    navbarName: "HCW- training- ARVs",
    icon: "content_paste",
    component: Task5
  },
  {
    path: "/task6",
    sidebarName: "Training and Prescription practices",
    navbarName: "Health care worker training and adherance to prescription practices",
    icon: "content_paste",
    component: Task6
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
    navbarName: "Correlation between staffing numbers and reduction of maternal and neonatal deaths caused by HIV related complications",
    icon: "content_paste",
    component: Task8
  },
  {
    path: "/task9",
    sidebarName: "Training and uptake of FP",
    navbarName: "Health worker training and an increased uptake of FP among HIV clients",
    icon: "content_paste",
    component: Task9
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
