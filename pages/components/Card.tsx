type CardProps = {
  children: React.ReactNode;
};
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div
      className={
        "text-center sm:text-left min-h-min bg-neutral-300 rounded-xl shadow-lg shadow-black min-w-min w-5/12 text-neutral-800 py-6 px-8 m-4"
      }
    >
      {children}
    </div>
  );
};

export default Card;
