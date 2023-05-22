export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  home_status: number;
  parent_id: number;
  position: number;
  created_at: string;
  updated_at: string;
};

export type CategoryDTO ={
  name: string,
  image:string | Blob
}
