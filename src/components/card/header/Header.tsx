import { HeaderProps } from "./Header.type";

const CardHeader = ({ title }: HeaderProps) => {
  return (
    <>
      <p className="font-bold">{title}</p>
    </>
  );
};

export default CardHeader;
