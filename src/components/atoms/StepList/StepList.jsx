import Text from "../Text";

export const StepList = ({ children }) => {
  return (
    <div className=" border-b border-smartGray py-6">
      <Text
        level={2}
        className="grid grid-cols-2 md:first:w-2 gap-4 md:gap-6 xl:gap-10 text-center md:text-left"
      >
        <span className=" h-2 w-2 bg-smartGray rounded-full mt-2 hidden md:block"></span>
        <span className=" w-[350px] md:w-[630px]">{children}</span>
      </Text>
    </div>
  );
};
