import Text from "../Text";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Accordion = ({ title, paragraph }) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="containerBox mx-auto  ">
      <div
        className={
          open
            ? "border shadow-md transition-all   ease-in rounded-md p-4 max-w-[880px] mx-auto  space-y-8 "
            : "border rounded-md p-4 md:w-[700px] lg:w-[880px] mx-auto  space-y-8 h-[76px] z-10"
        }
      >
        <div className="flex items-center justify-between">
          <Text level={1} className={open ? "!text-smartOrange " : ""}>
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

        {open ? (
          <div className="max-w-[771px] text-left">
            <Text level={2}>{paragraph}</Text>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
