import { Button, Card, Select, TextField } from "src/components";

const SubSubCategoryForm: React.FC = () => {
  return (
    <Card header="Sub sub category form">
      <TextField
        label="Sub Sub category Name"
        placeholder="New Sub Sub category Name"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <Select />
        <Select />
      </div>
      <div className="flex justify-end">
        <Button className="">Submit</Button>
      </div>
    </Card>
  );
};

export default SubSubCategoryForm;
