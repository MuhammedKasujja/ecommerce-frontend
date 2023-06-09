type StatusCardprops = {
  label: string;
  color: string;
  value: string;
  icon?: string;
};

const StatusCard: React.FC<StatusCardprops> = ({
  label,
  color,
  value,
  icon,
}) => {
  return (
    <div style={{ backgroundColor: color }} className="text-white rounded-lg p-5">
      <p className="text-xs font-medium mb-2">{label}</p>
      <div className="flex justify-between pt-2">
        <p className="font-bold text-lg">{value}</p>
        <p>{icon}</p>
      </div>
    </div>
  );
};

StatusCard.defaultProps = {
  label: "Pending",
  color: "red",
  value: "0",
  icon: ">",
};

export default StatusCard;
