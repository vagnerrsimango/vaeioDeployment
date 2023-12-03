import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
};

const Button2 = ({ type, title, icon, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-4 mr-6 h-10 bg-blue-400   ${full && "w-full"}`}
      type={type}
    >
      <label className="bold-16 mr-4 ml-4 text-primary-0 whitespace-nowrap cursor-pointer">
        {title}
      </label>
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={10}
          height={10}
          className=" mr-4"
        />
      )}
    </button>
  );
};

export default Button2;
