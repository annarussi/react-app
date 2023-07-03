import { ReactNode } from "react";

interface Props {
children: ReactNode;
onCLick: () => void;
}

export default function Button({children, onCLick}: Props) {
  return (
    <a className="button" onClick={onCLick}>{children}</a>
  )
}
