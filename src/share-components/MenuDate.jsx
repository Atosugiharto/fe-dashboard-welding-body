/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { toggleSidebar, openSidebar } from "../slices/sidebarSlice";

export const MenuDate = ({
  menu,
  href = "/ohc-sbc-wt",
  icon = <HomeIcon className="h-6 w-6" />,
}) => {
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  function getFormattedDate() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const today = new Date();
    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  }

  // Masukkan hasil ke dalam variabel
  const todayFormatted = getFormattedDate();
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", { hour12: false });
      setTime(formattedTime);
      setLoading(false);
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="font-bold text-xl flex items-center gap-2">
        <Link to={href} onClick={() => dispatch(openSidebar())}>
          {icon}
        </Link>
        <button type="button" onClick={() => dispatch(toggleSidebar())}>
          <Bars3Icon className="h-6 w-6" />
        </button>
        <div>{menu}</div>
      </div>
      <div className="text-center text-sm">
        <div>{todayFormatted}</div>
        <div>{loading ? <Spinner classAdditional={"h-5"} /> : time}</div>
      </div>
    </div>
  );
};
