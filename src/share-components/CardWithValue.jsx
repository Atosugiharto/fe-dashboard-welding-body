/* eslint-disable react/prop-types */
export const CardWithValue = ({label, value, unit, classAdditional}) => {
  return (
    <div
      className={`bg-white rounded-lg p-2 4k:p-4 space-y-2 4k:space-y-4 ${classAdditional}`}
    >
      <div className="text-left">{label}</div>
      <div className="text-right font-bold text-2xl 4k:text-4xl">
        {value ? value : "-"}
        <span className="text-xl 4k:text-2xl">{unit}</span>
      </div>
    </div>
  );
};
