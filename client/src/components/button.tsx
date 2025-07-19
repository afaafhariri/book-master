import React, { ButtonHTMLAttributes } from "react";
import cx from "classnames";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const styles = {
  base: "px-4 py-2 rounded-xl font-medium focus:outline-none focus:ring-2",
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300",
  danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => (
  <button className={cx(styles.base, styles[variant], className)} {...props}>
    {children}
  </button>
);

export default Button;
