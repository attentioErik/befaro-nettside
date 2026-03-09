export default function BefaroLogo({
  size = "md",
  light = false,
}: {
  size?: "sm" | "md" | "lg";
  light?: boolean;
}) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <span className={`${sizeClasses[size]} font-bold tracking-tight`}>
      <span className={light ? "text-white" : "text-foreground"}>Bef</span>
      <span className="text-primary">a</span>
      <span className={light ? "text-white" : "text-foreground"}>ro</span>
      <span className="text-primary">.</span>
    </span>
  );
}
