import { Card } from "src/components";
import StatusCard from "./components/StatusCard";

const Dashboard: React.FC = () => {
  return (
    <>
      <Card>
        <div className="w-full">
          <div className="flex gap-2">
            <StatusCard label="PENDING" color="#3E215D" />
            <StatusCard label="CONFIRMED" color="#001E6C" />
            <StatusCard label="PROCESSING" color="#053742" />
            <StatusCard label="OUT FOR DELIVERLY" color="#343A40" />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
