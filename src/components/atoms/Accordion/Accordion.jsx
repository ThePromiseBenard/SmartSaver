import Text from "../Text";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Accordion = ({ title, paragraph }) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="containerBox mx-auto space-y-8">
      <div
        className={
          open
            ? "border shadow-md transition-all  delay-200 ease-in rounded-md p-4 max-w-[880px] mx-auto mt-8 space-y-8 h-[212px]"
            : "border rounded-md p-4 max-w-[880px] mx-auto mt-8 space-y-8 h-[76px]"
        }
      >
        <div className="flex items-center justify-between">
          <Text
            level={1}
            className={
              open ? "!text-smartOrange transition-all delay-75 ease-in" : ""
            }
          >
            {title}
          </Text>
          <div className="text-2xl cursor-pointer">
            {open ? (
              <AiOutlineMinus onClick={() => openHandler()} />
            ) : (
              <AiOutlinePlus onClick={() => openHandler()} />
            )}
          </div>
        </div>
        <div
          className={
            open
              ? "max-w-[771px]  transition-all delay-300 ease-in opacity-1"
              : "max-w-[771px] opacity-0"
          }
        >
          <Text level={2}>{paragraph}</Text>
        </div>
      </div>
    </div>
  );
};
