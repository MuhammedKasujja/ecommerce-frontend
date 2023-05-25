import { Card, Select, TextArea, TextField } from "src/components";

const AddProduct: React.FC = () => {
  return (
    <form className="w-full">
      <Card>
        <TextField label="Name" />
        <TextArea label={"Description"} onChange={(_) => {}} />
      </Card>

      <Card header="General info">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Select label="Category" />
          <Select label="Sub Category" />
          <Select label="Sub Sub Category" />
          <Select label="Brand" />
          <Select options={[{ label: "kg", value: "kg" }]} label="Unit" />
        </div>
      </Card>

      <Card header="Variations">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField label="Color" />
          <Select label="Attributes" />
        </div>
      </Card>
    </form>
  );
};

export { AddProduct };
