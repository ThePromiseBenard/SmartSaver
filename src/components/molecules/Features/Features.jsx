import Heading from "../../atoms/Heading";
import Text from "../../atoms/Text";
import IconBox from "../../atoms/IconBox";

export const Features = ({ title, paragraph, icon }) => {
  return (
    <div className=" flex flex-col justify-center md:items-center md:text-center gap-2 md:gap-4 h-66">
      <IconBox>{icon}</IconBox>
      <Heading level={6}>{title}</Heading>
      <Text className=" font-medium md:w-[295px]">{paragraph}</Text>
    </div>
  );
};
