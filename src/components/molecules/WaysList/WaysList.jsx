import WaysBlock from "../../atoms/WaysBlock";
import {
  MdOutlineSecurity,
  MdHttps,
  MdOutlineSignalCellularAlt,
} from "react-icons/md";

export const WaysList = () => {
  const waysContent = [
    {
      title: "Smart Lock",
      paragraph: "Earn your Interest upfront up to 26% Today",
      icon: <MdOutlineSecurity />,
      className: " bg-smartOrangeIcon text-smartOrange ",
      id: 1,
    },
    {
      title: "Super Lock",
      paragraph: "Interest of your super fixed deposit up to 30% pa.",
      icon: <MdHttps />,
      className: " bg-smartPurpleIcon text-smartPurple ",
      id: 2,
    },
    {
      title: "Smart Flex",
      paragraph: "Grow the money on your wallet daily.",
      icon: <MdOutlineSignalCellularAlt />,
      className: " bg-smartBlueIcon text-smartBlue ",
      id: 3,
    },
  ];

  return (
    <div className="space-y-4">
      {waysContent.map((item) => {
        return (
          <WaysBlock
            title={item.title}
            paragraph={item.paragraph}
            icon={item.icon}
            key={item.id}
            className={item.className}
          />
        );
      })}
    </div>
  );
};
