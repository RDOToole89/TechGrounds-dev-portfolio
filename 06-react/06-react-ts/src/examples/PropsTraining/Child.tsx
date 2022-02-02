interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}: ChildProps) => {
  console.log(children);
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}></button>
    </div>
  );
};
