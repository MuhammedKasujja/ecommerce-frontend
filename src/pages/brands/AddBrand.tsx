import { useEffect, useState } from "react";
import { BrandService } from "src/api";
import { Button, Card, Dropzone, FileInput, TextField } from "src/components";
import { BrandDTO } from "src/types";

const AddBrand: React.FC = () => {
  const defaultBrand: BrandDTO = { name: "", image: "" };
  const [brand, setBrand] = useState<BrandDTO>(defaultBrand);
  const [submit, setSubmit] = useState(0);
  const { loading, error, message } = BrandService.addNew(brand!, submit);

  const handleChange = (data: Record<string, any>) => {
    setBrand((prevCat) => ({ ...prevCat!, ...data }));
  };

  useEffect(() => {
    if (message) setBrand(defaultBrand);
  }, [message]);
  
  return (
    <Card header="Add New Brand">
      <form onSubmit={(e) => e.preventDefault()}>
        {error && (
          <div className="text-red-600 bg-red-100 p-1 rounded">{error}</div>
        )}
        <div className="flex flex-col gap-4 mb-4">
          <TextField
            label="Name"
            placeholder="Eg: bread"
            onChange={(name) => handleChange({ name })}
            value={brand?.name}
          />
          <Dropzone
            onFiles={(files) => {
              console.log({ files });
              handleChange({ image: files[0] });
            }}
            multipleFiles
          />
          {/* <FileInput title="Image" handleChange={(image)=>handleChange({ image })} /> */}
        </div>
        <div className="flex justify-end">
          <Button
            isLoading={loading}
            onClick={(_) => setSubmit((prev) => ++prev)}
          >
            SAVE
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddBrand;
