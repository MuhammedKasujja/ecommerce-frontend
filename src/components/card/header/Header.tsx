import { HeaderProps } from "./Header.type";

const CardHeader = ({ title }: HeaderProps) => {
  return (
    <>
      <p className=" text-slate-400">{title}</p>
    </>
  );
};

export default CardHeader;
