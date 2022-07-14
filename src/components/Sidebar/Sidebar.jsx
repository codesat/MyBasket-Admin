import React from "react";
import "./sidebar.css";
import {
  MdLineStyle,
  MdTimeline,
  MdTrendingUp,
  MdReport,
  MdFeedback,
} from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { BsBag } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { IoStatsChart } from "react-icons/io5";
import { FiMail, FiMessageSquare } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <Link to="/" className="link">
              <li className="sidebarlistitem active">
                <i class="bx bx-home sidebaricon"></i>
                Home
              </li>
            </Link>
            <li className="sidebarlistitem">
              <i class="bx bx-trending-up sidebaricon"></i>
              Analytics
            </li>
            <li className="sidebarlistitem">
              <i class="bx bx-dollar sidebaricon"></i>
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notifications</h3>
          <ul className="sidebarlist">
            <Link to="/users" className="link">
              <li className="sidebarlistitem">
                <i class="bx bx-user sidebaricon"></i>
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarlistitem ">
                <i class="bx bx-cube sidebaricon"></i>
                Products
              </li>
            </Link>

            <li className="sidebarlistitem">
              <i class='bx bxs-bank sidebaricon'></i>
              Transactions
            </li>
            <li className="sidebarlistitem">
              <i class='bx bxs-report sidebaricon'></i>
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quick Menu</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <i class='bx bx-envelope sidebaricon'></i>
              Mail
            </li>
            <li className="sidebarlistitem">
              <i class='bx bx-question-mark sidebaricon'></i>
              Feedback
            </li>
            <li className="sidebarlistitem">
              <i class='bx bx-message sidebaricon'></i>
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem ">
              <i class='bx bxs-user-badge sidebaricon'></i>
              Manager
            </li>
            <li className="sidebarlistitem">
              <MdReport className="sidebaricon" />
              Reviews
            </li>
            <li className="sidebarlistitem">
              <i class='bx bx-log-out sidebaricon'></i>
              LogOut
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
