export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-surface text-primary hover:bg-background/90 shadow-md hover:border-primary font-sans";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    default: "px-6 py-3 text-base",
    lg: "px-6 py-2 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
export default Button;
