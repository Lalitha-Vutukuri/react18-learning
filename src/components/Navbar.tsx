import React from "react";

interface Props {
  cartlength: number;
}

const Navbar = ({ cartlength }: Props) => {
  return <div>{cartlength}</div>;
};

export default Navbar;
