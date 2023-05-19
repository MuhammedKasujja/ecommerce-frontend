import { Button, Card, Select, TextField } from "src/components";

const SubCategoryForm: React.FC = () => {
  return (
    <Card header="Sub category form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <TextField label="Sub category Name" placeholder="Sub category Name" />
        <Select />
      </div>
      <div className="flex justify-end">
        <Button className="">Submit</Button>
      </div>
    </Card>
  );
};

export default SubCategoryForm
