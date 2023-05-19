import { Button, Card, Dropzone, TextField } from "src/components";

const AddBrand: React.FC = () => {
  return (
    <Card header="Add New Brand">
      <div className="flex flex-col gap-4 mb-4">
        <TextField label="Name" placeholder="Eg: bread"/>
        <Dropzone />
      </div>
      <div className="flex justify-end">
        <Button className="">SAVE</Button>
      </div>
    </Card>
  );
};

export default AddBrand;
