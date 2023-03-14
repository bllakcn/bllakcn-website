type CardDetailsProps = {
  title: string;
  children: React.ReactNode;
};

export const CardDetails: React.FC<CardDetailsProps> = ({
  title,
  children,
}) => {
  return (
    <div className="px-2 sm:px-10 flex flex-col gap-2 text-center sm:text-left">
      <h4 className="text-2xl ">{title}</h4>
      <div className="text-xl">{children}</div>
    </div>
  );
};
