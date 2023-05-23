export type Brand = {
  id: string | number;
  name: string;
  image?: string;
};


export type BrandDTO ={
  name: string,
  image: Blob | string
}