import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CardOhcStatus = ({
  to = "",
  title = "",
  backgroundColor = "",
  value,
  unit,
  classAdditional = "",
}) => {
  return (
    <Link
      to={to}
      className={`rounded-lg bg-white p-2 ${classAdditional} ${
        to !== "" ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="text-center text-xs font-semibold mb-1">{title}</div>
      <div
        className={`${backgroundColor} text-center font-bold text-2xl p-1 rounded-lg`}
      >
        {value ? value : "-"}
        <span className="text-xl">{unit}</span>
      </div>
    </Link>
  );
};
