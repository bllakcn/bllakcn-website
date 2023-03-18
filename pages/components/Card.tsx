type CardProps = {
  children: React.ReactNode;
};
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div
      className={
        "text-center sm:text-left min-h-min bg-neutral-300 rounded-xl shadow-lg shadow-neutral-800 text-neutral-800 py-6 px-2 sm:px-8"
      }
    >
      {children}
    </div>
  );
};

export default Card;
