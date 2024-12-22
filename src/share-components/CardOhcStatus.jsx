/* eslint-disable react/prop-types */
export const CardOhcStatus = ({ title="", backgroundColor="", value, unit, classAdditional="" }) => {
  return (
    <div className={`rounded-lg bg-white p-2 ${classAdditional}`}>
      <div className="text-center text-xs font-semibold mb-1">{title}</div>
      <div className={`${backgroundColor} text-center font-bold text-2xl p-1 rounded-lg`}>
        {value ? value : "-"}
        <span className="text-xl">{unit}</span>
      </div>
    </div>
  );
};
