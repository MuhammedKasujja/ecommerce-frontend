import { Card, Select } from "src/components";
import StatusCard from "./components/StatusCard";
import StatusTab from "./components/StatusTab";
import WalletCard from "./components/WalletCard";
import { ProductService } from "src/api";

const Dashboard: React.FC = () => {
  
  const { data, pagination, loading, error } = ProductService.fetchAll();

  console.log({data, pagination, loading, error})
  return (
    <>
      <div className="font-bold text-2xl mb-2">Dahboard</div>
      <Card
        header={
          <div className="flex justify-center flex-wrap gap-2 md:justify-between">
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
        <div className="w-full flex flex-col gap-6 pb-2">
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
      <Card header={<div className="font-bold">Admin Wallet</div>}>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <WalletCard
            color="#22577A"
            label="Commission earned"
            earnings="89.9"
          />
          <WalletCard
            color="#a66f2e"
            label="Delivery charge earned"
            earnings="60"
          />
          <WalletCard color="#6D9886" label="Pending Amount" earnings="234" />
          <WalletCard
            color="#4E9F3D"
            label="In-House Earning"
            earnings="1000"
          />
          <WalletCard
            color="#6E85B2"
            label="Tota Tax collected"
            earnings="200"
          />
        </div>
      </Card>
      <Card
        header={
          <div className="font-bold">
            Earning statistics for business analytics
          </div>
        }
      ></Card>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
        <Card
          header={<div className="font-bold">Total Business Overview</div>}
        ></Card>
        <Card
          header={<div className="font-bold">Top store by order received</div>}
        ></Card>
        <Card
          header={<div className="font-bold">Top selling store</div>}
        ></Card>
        <Card
          header={<div className="font-bold">Top selling products</div>}
        ></Card>
        <Card
          header={<div className="font-bold">Most rated products</div>}
        ></Card>
        <Card header={<div className="font-bold">Top customer</div>}></Card>
      </div>
    </>
  );
};

export default Dashboard;
