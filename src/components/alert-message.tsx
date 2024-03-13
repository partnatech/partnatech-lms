interface AlertMessageProps {
  message: string;
  type: "error" | "warning" | "success" | "info";
}

export const AlertMessage = ({ message, type }: AlertMessageProps) => {
  let className = "block my-2 mx-auto";

  switch (type) {
    case "error":
      className += " text-red-600";
      break;
    case "warning":
      className += " text-yellow-600";
      break;
    case "success":
      className += " text-green-600";
      break;
    case "info":
      className += " text-blue-600";
      break;
    default:
      break;
  }

  return <>{message && <span className={className}>{message}</span>}</>;
};
