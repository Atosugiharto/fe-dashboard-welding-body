/* eslint-disable react/prop-types */
export const CardWithValue = ({label, value, unit, classAdditional}) => {
  return (
    <div className={`bg-white rounded-lg p-2 space-y-2 ${classAdditional}`}>
      <div className="text-left">{label}</div>
      <div className="text-right font-bold text-2xl">
        {value ? value : "-"}
        <span className="text-xl">{unit}</span>
      </div>
    </div>
  );
};
