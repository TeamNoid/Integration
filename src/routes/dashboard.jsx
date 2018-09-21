// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

import BubbleChart from "@material-ui/icons/BubbleChart";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";

import TableList from "views/TableList/TableList.jsx";
import Auditlogs from "views/Auditlogs/Auditlogs.jsx";

import Icons from "views/Icons/Icons.jsx";

import NotificationsPage from "views/Notifications/Notifications.jsx";

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
    path: "/Fetchdata",
    sidebarName: "Facility Data",
    navbarName: "Facility Data",
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
