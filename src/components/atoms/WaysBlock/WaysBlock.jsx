import Heading from "../Heading";
import Text from "../Text";
import clsx from "clsx";

export const WaysBlock = ({ title, paragraph, icon, className }) => {
  return (
    <div className="bg-white max-w-[498px] ml-auto flex  items-center gap-2 md:gap-6 rounded-xl p-2 md:p-8 border shadow-sm">
      <div
        className={clsx(
          "h-8 w-8 md:h-12 md:w-12 rounded-full flex items-center justify-center md:text-2xl ",
          className
        )}
      >
        {icon}
      </div>
      <div className="md:space-y-2">
        <Heading level={5}>{title}</Heading>
        <Text
          level={1}
          color="black"
          className=" max-w-[220px] md:max-w-[357px]"
        >
          {paragraph}
        </Text>
      </div>
    </div>
  );
};
