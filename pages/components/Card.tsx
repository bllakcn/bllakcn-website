type CardProps = {
  children: React.ReactNode;
};
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div
      className={
        "min-h-min bg-neutral-200 rounded-lg shadow-lg w-7/12 text-neutral-900 p-4 m-4"
      }
    >
      {children}
    </div>
  );
};

export default Card;
