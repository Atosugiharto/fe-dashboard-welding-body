/* eslint-disable react/prop-types */
export const CardOhcDetail = ({title, backgroundColor, borderColor}) => {
  return (
    <div className={`rounded-lg ${backgroundColor} border-4 ${borderColor} px-3 py-4`}>
      <div className="text-center font-bold">{title}</div>
      <div>
        <label className="text-xs" htmlFor="ohc1-amp">
          Amp
        </label>
        <input type="text" className="w-full rounded-lg bg-white p-1 mt-1" />
      </div>

      <div className="mt-2">
        <label className="text-xs" htmlFor="ohc1-temp">
          Temp
        </label>
        <input type="text" className="w-full rounded-lg bg-white p-1 mt-1" />
      </div>
    </div>
  );
};
