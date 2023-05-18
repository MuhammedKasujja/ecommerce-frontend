import { Card, Select } from "src/components";
import StatusCard from "./components/StatusCard";
import StatusTab from "./components/StatusTab";

const Dashboard: React.FC = () => {
  return (
    <>
      <Card
        header={
          <div className="flex justify-between">
            <div className="font-bold">Dashboard order statistics</div>
            <Select
              size="sm"
              options={[
                { label: "Overall statistics", value: "40" },
                { label: "Today statistics", value: "50" },
                { label: "Month statistics", value: "60" },
              ]}
            />
          </div>
        }
      >
        <div className="w-full flex flex-col gap-4">
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <StatusCard label="PENDING" color="#3E215D" value="50" />
            <StatusCard label="CONFIRMED" color="#001E6C" value="100" />
            <StatusCard label="PROCESSING" color="#053742" value="50" />
            <StatusCard
              label="OUT FOR DELIVERLY"
              color="#343A40"
              value="23000"
            />
          </div>
          <StatusTab />
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
