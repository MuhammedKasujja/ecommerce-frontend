import { Button, Card, TextField } from "src/components";

const Attribute: React.FC = () => {
  return (
    <>
      <Card header="Add New Attribute">
        <TextField label="Enter Attribute Name" placeholder="Attribute Name" />
        <div className="flex justify-end mt-5">
          <Button className="">Submit</Button>
        </div>
      </Card>
    </>
  );
};

export default Attribute;
