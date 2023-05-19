import { Button, Card, Dropzone, TextField } from "src/components";

const CategoryForm: React.FC = () => {
  return (
    <Card header="Category form">
      <div className="flex flex-col gap-4 mb-4">
        <TextField label="New category" placeholder="Eg: bread" />
        <Dropzone />
      </div>
      <div className="flex justify-end">
        <Button className="">SAVE</Button>
      </div>
    </Card>
  );
};

export default CategoryForm