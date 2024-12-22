/* eslint-disable react/prop-types */
const Table = ({ maxHeight = "max-h-64" }) => {
  const data = [
    { no: 1, id: 'LSX70C', description: 'Down End 1', actual: 150, standard: 100, re: 'NG' },
    { no: 2, id: 'LSX709', description: 'Upper End 1', actual: 100, standard: 200, re: 'OK' },
    { no: 3, id: 'LSX702', description: 'Chain Over Run', actual: 150, standard: 200, re: 'OK' },
    { no: 4, id: 'LSX701', description: 'Clean Hanger Arm', actual: 150, standard: 100, re: 'NG' },
    { no: 5, id: 'LSX70C', description: 'Open Hanger Arm', actual: 100, standard: 200, re: 'OK' },
    { no: 6, id: 'LSX709', description: 'Upper End 1', actual: 100, standard: 200, re: 'OK' },
    { no: 7, id: 'LSX702', description: 'Chain Over Run', actual: 100, standard: 200, re: 'OK' },
    { no: 8, id: 'LSX701', description: 'Close Hanger Arm', actual: 150, standard: 100, re: 'NG' },
  ];

  return (
    <div className={`flex overflow-x-auto text-sm gap-1 overflow-y-auto ${maxHeight}`}>
      {/* Bagian Tabel */}
      <div className="flex-1">
        <table className="table-auto w-full border-collapse border-2 border-dongker text-center">
          <thead className="bg-dongker text-white">
            <tr>
              <th className="px-1 py-0.5">No</th>
              <th className="px-1 py-0.5">ID</th>
              <th className="px-1 py-0.5">Descriptions</th>
              <th className="px-1 py-0.5">Actual</th>
              <th className="px-1 py-0.5">Standard</th>
              <th className="px-1 py-0.5">RE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${row.re === 'NG' ? 'bg-red-500' : ''}`}
              >
                <td className="border-x-2 border-dongker px-1 py-0.5">{row.no}</td>
                <td className="border-x-2 border-dongker px-1 py-0.5">{row.id}</td>
                <td className="border-x-2 border-dongker px-1 py-0.5 text-left">{row.description}</td>
                <td className="border-x-2 border-dongker px-1 py-0.5">{row.actual}</td>
                <td className="border-x-2 border-dongker px-1 py-0.5">{row.standard}</td>
                <td className="border-x-2 border-dongker px-1 py-0.5">{row.re}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bagian Tombol Reset */}
      <div className="flex flex-col gap-1" style={{ marginTop: '28px' }}>
        {data.map((row, index) => (
          <button
            key={index} style={{ fontSize: '11px' }}
            className={`pl-1 pr-4 rounded-sm ${
              row.re === 'NG' ? 'bg-black text-white' : 'bg-tombol-abu-tua text-tulisan-tombol-abu-tua'
            }`}
          >
            Rst
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
