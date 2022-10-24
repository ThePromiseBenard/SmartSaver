import { Features } from "../Features/Features";
import { AiOutlineLike, AiOutlineMessage } from "react-icons/ai";
import clsx from "clsx";

export const FeatureLeft = ({ className }) => {
  const featuresContent = [
    {
      title: "Easy to Use Interface",
      paragraph:
        "We provide digital experiences that are convenient, easy to use and provide the users with more control for everyday financial transactions. ",
      icon: <AiOutlineLike />,
      id: 1,
    },
    {
      title: "Best Customer Support",
      paragraph:
        "We offer an outstanding 24/7 customer support for our numerous customers through in-app chat, whatsapp messaging, email and phone calls support..",
      icon: <AiOutlineMessage />,
      id: 2,
    },
  ];
  return (
    <div className={clsx("space-y-4 md:space-y-8 lg:space-y-36 ", className)}>
      {featuresContent.map((item) => (
        <Features
          title={item.title}
          paragraph={item.paragraph}
          icon={item.icon}
          key={item.id}
        />
      ))}
    </div>
  );
};
