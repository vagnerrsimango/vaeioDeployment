import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
  onClick?: () => void;
};

const Button = ({ type, title, icon, full, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-4 mr-6 h-10 bg-blue-400   ${full && "w-full"}`}
      type={type}
      onClick={onClick}
    >
      {icon && (
        <Image src={icon} alt={title} width={40} height={40} className="ml-4" />
      )}
      <label className="bold-16 mr-4 text-primary-0 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
