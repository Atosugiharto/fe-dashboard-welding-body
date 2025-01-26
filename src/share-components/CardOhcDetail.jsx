/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export const CardOhcDetail = ({
  to,
  title,
  backgroundColor,
  borderColor,
  amp,
  temp,
}) => {
  return (
    <Link
      to={to}
      className={`rounded-lg ${backgroundColor} border-4 ${borderColor} px-3 py-4`}
    >
      <div className="text-center font-bold">{title}</div>
      <div>
        <label className="text-xs 4k:text-xl" htmlFor="ohc1-amp">
          Amp
        </label>
        <input
          value={amp?.toFixed(2)}
          type="text"
          readOnly
          className="w-full rounded-lg bg-white p-1 mt-1"
        />
      </div>

      <div className="mt-2">
        <label className="text-xs 4k:text-xl" htmlFor="ohc1-temp">
          Temp
        </label>
        <input
          readOnly
          value={temp?.toFixed(2)}
          type="text"
          className="w-full rounded-lg bg-white p-1 mt-1"
        />
      </div>
    </Link>
  );
};
