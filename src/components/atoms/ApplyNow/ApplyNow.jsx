import SmartLinks from "../SmartLinks";
import { BsArrowRight } from "react-icons/bs";

export const ApplyNow = () => {
  return (
    <SmartLinks
      url="https://docs.google.com/forms/d/e/1FAIpQLSfyMsvsyupQV5btS0F3H4EBkPso76hl9BDp7hJsa7wiTA_lmg/viewform?vc=0&c=0&w=1&flr=0"
      className="text-smartOrange text-xl md:text-2xl xl:text-3xl flex gap-4 items-center  border-b border-smartOrange w-40 md:w-44 xl:w-52 "
    >
      APPLY NOW
      <BsArrowRight />
    </SmartLinks>
  );
};
