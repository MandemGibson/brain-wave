import { ReactNode } from "react";
import ButtonSvg from "../assets/svg/ButtonSvg.jsx";

interface Props {
  className?: string;
  href?: string;
  px?: string;
  white?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const Button = ({ ...everything }: Props) => {
  const classes = `button relative inline-flex items-center
  justify-center h-11 transition-colors hover:text-color-1 
  ${everything.px || "px-7"} ${everything.white ? "text-n-8" : "text-n-1"}
  ${everything.className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={everything.onClick}>
      <span className={spanClasses}>{everything.children}</span>
      {ButtonSvg(everything.white)}
    </button>
  );

  const renderLink = () => (
    <a href={everything.href} className={classes}>
      <span className={spanClasses}>{everything.children}</span>
      {ButtonSvg(everything.white)}
    </a>
  )

  return everything.href ? renderLink() : renderButton();
};

export default Button;
