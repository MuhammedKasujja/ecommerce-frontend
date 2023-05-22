export enum FileType {
  image = ".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*",
  doc = ".doc",
}

export type FileInputProps = {
  hint?: string;
  title: string;
  preview?: boolean;
  handleChange(file: File | null | undefined): void;
  type?: FileType;
};
