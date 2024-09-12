import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const sidebarData = [
  {
    id: 1,
    name: "pages",
    content: [
      {
        id: 1,
        icon: <MdDashboard />,
        name: "dashboard",
        link: "/dashboard",
      },
      {
        id: 2,
        icon: <FaUser />,
        name: "users",
        link: "/dashboard/users/add-user",
      },
      {
        id: 1,
        icon: <MdDashboard />,
        name: "show user",
        link: "/dashboard/users/show-users",
      },
      {
        id: 1,
        icon: <MdDashboard />,
        name: "transactions",
        link: "/dashboard/users/show-users",
      },
    ],
  },
  {
    id: 2,
    name: "analytics",
    content: [
      {
        id: 1,
        icon: <MdDashboard />,
        name: "Revenue",
        link: "/dashboard/users/show-users",
      },
      {
        id: 2,
        icon: <MdDashboard />,
        name: "Reports",
        link: "/dashboard/users/show-users",
      },
      {
        id: 3,
        icon: <MdDashboard />,
        name: "Teams",
        link: "/dashboard/users/show-users",
      },
    ],
  },
  {
    id: 3,
    name: "User",
    content: [
      {
        id: 1,
        icon: <MdDashboard />,
        name: "setting",
        link: "/dashboard/users/show-users",
      },
      {
        id: 2,
        icon: <MdDashboard />,
        name: "help",
        link: "/dashboard/users/show-users",
      },
      {
        id: 3,
        icon: <MdDashboard />,
        name: "logout",
        link: "/dashboard/users/show-users",
      },
    ],
  },
];
