import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300",
        {
          "bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",

          "border border-slate-300 bg-white hover:bg-slate-100":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;