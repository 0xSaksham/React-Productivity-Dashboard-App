import React from "react";
import "../styles/Button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "danger";
  loading?: boolean;
};

export default function Button({
  variant = "primary",
  loading = false,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <span className="spinner"></span> : children}
    </button>
  );
}
