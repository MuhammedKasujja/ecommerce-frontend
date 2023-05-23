import { useState } from "react";
import { CategoryService } from "src/api";
import { Button, Card, Dropzone, FileInput, TextField } from "src/components";
import { CategoryDTO } from "src/types";

const CategoryForm: React.FC = () => {
  const [category, setCategory] = useState<CategoryDTO>();
  const [submit, setSubmit] = useState(0);
  const { loading, error, message } = CategoryService.addNew(category!, submit);

  const handleChange = (data: Record<string, any>) => {
    setCategory((prevCat) => ({ ...prevCat!, ...data }));
  };

  return (
    <Card header="Category form">
      {error && (
        <div className="text-red-600 bg-red-100 p-1 rounded">{error}</div>
      )}
      {message && (
        <div className="text-green-600 bg-green-100 p-1 rounded">{message}</div>
      )}
      <div className="flex flex-col gap-4 mb-4">
        <TextField
          label="New category"
          placeholder="Eg: Phone"
          onChange={(name) => handleChange({ name })}
        />
        <FileInput title="Image" handleChange={(image)=>handleChange({ image })} />
        <Dropzone/>
      </div>
      <div className="flex justify-end">
        <Button
          isLoading={loading}
          onClick={(_) => setSubmit((prev) => ++prev)}
        >
          SAVE
        </Button>
      </div>
    </Card>
  );
};

export default CategoryForm;
