import clsx from "clsx";
import Heading from "../../atoms/Heading";
import Text from "../../atoms/Text";

export const ValuesBlock = ({ className, title, paragraph, number }) => {
  return (
    <div className="bg-white text-left shadow-lg hover:shadow-2xl transition-all delay-100 ease-in  rounded-lg  py-10 px-3 md:pt-14 md:pb-14 space-y-4 md:space-y-10 md:px-7 ">
      <div
        className={clsx(
          "w-10 h-10 md:w-14  md:h-14 rounded-full ml-3 md:ml-6 md:pt-2",
          className
        )}
      >
        <Heading className="-translate-x-4 md:-translate-x-6" level={3}>
          {number}
        </Heading>
      </div>
      <div className=" space-y-3 md:space-y-6">
        <Heading>{title}</Heading>
        <Text level={2}>{paragraph}</Text>
      </div>
    </div>
  );
};
