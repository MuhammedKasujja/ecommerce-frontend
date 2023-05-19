type WalletCardProps = {
  earnings: string;
  label: string;
  color: string;
};

const WalletCard: React.FC<WalletCardProps> = ({ earnings, label, color }) => {
    const currency = '$';
  return (
    <div
      className="rounded-lg text-white uppercase flex flex-col items-center justify-center p-6"
      style={{ background: color }}
    >
      <div className="font-bold mb-5 text-lg">{earnings} {currency}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
};

export default WalletCard;
