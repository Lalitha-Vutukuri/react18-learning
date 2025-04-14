import React from "react";

interface Props {
  children: String;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div onClick={onClick} className="btn btn-secondary">
      {children}
    </div>
  );
};

export default Button;
