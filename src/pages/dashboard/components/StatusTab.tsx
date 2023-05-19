type StatusCardprops = {
  label: string;
  value: string | number;
  icon?: string;
};

const StatusCard = ({ label, value, icon }: StatusCardprops) => {
  return (
    <div className="p-2 relative">
      <div className="text-gray-400 mb-4 uppercase text-xs font-semibold">
        {label}
      </div>
      <div className="flex justify-between">
        <div className="font-bold">{value}</div>
      </div>
      <div className="absolute top-6 right-5 p-1 bg-gray-200 rounded-full">
        {icon ?? "@"}
      </div>
    </div>
  );
};

const StatusTab: React.FC = () => {
  return (
    <div className="w-full bg-[#FEF7DC] rounded-lg grid md:grid-cols-2 p-4 lg:grid-cols-4 divide-x-0 md:divide-x divide-y md:divide-y-0 border">
      <StatusCard label="DELIVERED" value={50} />
      <StatusCard label="Canceled" value={50} />
      <StatusCard label="Returned" value={50} />
      <StatusCard label="Failed" value={50} />
    </div>
  );
};

export default StatusTab;
