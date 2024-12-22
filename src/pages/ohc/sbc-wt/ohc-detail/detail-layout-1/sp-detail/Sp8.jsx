import Table from "../../../../../../share-components/Table";

export const Sp8 = () => {
  return (
    <div className="grid grid-cols-9 gap-2 mt-4">
      <div className="col-span-4 bg-white rounded-lg">
        <div className="p-2 text-md font-bold">Layout</div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1647427060118-4911c9821b82"
            alt=""
            className="w-full rounded-lg h-32 object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1730584475795-f0be0efd606e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdlbGRpbmclMjBtYWNoaW5lfGVufDB8fDB8fHww"
            alt=""
            className="w-full rounded-lg mt-2 mb-4"
          />
        </div>
      </div>

      <div className="col-span-5 grid grid-cols-1 gap-2">
        <div className="bg-white rounded-lg py-2 pl-5 pr-2">
          <div className="text-md font-bold mb-4">Current Conditions</div>
          <Table />
        </div>

        <div className="bg-white rounded-lg py-2 pl-5 pr-2">
          <div className="text-md font-bold mb-4">Cycle Time</div>
          <Table />
        </div>
      </div>
    </div>
  );
};
