type StatusCardprops = {
  label: string;
  value: string | number;
  icon?: string;
};

const StatusCard = ({ label, value, icon }: StatusCardprops) => {
  return (
    <div className="p-4 relative">
      <div className="text-gray-400 mb-4 uppercase text-xs font-semibold">
        {label}
      </div>
      <div className="flex justify-between">
        <div>{value}</div>
      </div>
      <div className="absolute top-10 right-5 p-1 bg-gray-300 rounded-full">{icon ?? "@"}</div>
    </div>
  );
};

const StatusTab: React.FC = () => {
  return (
    <div className="w-full bg-[#FEF7DC] rounded-lg outline-none grid md:grid-cols-2 lg:grid-cols-4">
      <StatusCard label="DELIVERED" value={50} />
      <StatusCard label="Canceled" value={50} />
      <StatusCard label="Returned" value={50} />
      <StatusCard label="Failed" value={50} />
    </div>
  );
};

export default StatusTab;
