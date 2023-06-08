import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
export const SidebarData = [
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/profile",
  },

  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/homepage",
  },
  {
    title: "Dashboard",
    icon: <DashboardCustomizeIcon />,
    link: "/dashboard",
    active: true,
  },

  {
    title: "Mail",
    icon: <MailIcon />,
    link: "/mail",
  },

  {
    title: "Payments",
    icon: <PaymentsIcon />,
    link: "/payments",
  },

  {
    title: "Balance",
    icon: <AccountBalanceWalletIcon />,
    link: "/balance",
  },
];
