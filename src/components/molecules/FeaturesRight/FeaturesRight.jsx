import { Features } from "../Features/Features";
import { AiOutlineLike, AiOutlineMessage } from "react-icons/ai";
import clsx from "clsx";

export const FeaturesRight = ({ className }) => {
  const featuresContent = [
    {
      title: "Best Customer Support",
      paragraph:
        "We offer an outstanding 24/7 customer support for our numerous customers through in-app chat, whatsapp messaging, email and phone calls support.",
      icon: <AiOutlineMessage />,
      id: 1,
    },
    {
      title: "Easy to use Interface",
      paragraph:
        "We provide digital experiences that are convenient, easy to use and provide the users with more control for everyday financial transactions.",
      icon: <AiOutlineLike />,
      id: 2,
    },
  ];
  return (
    <div className={clsx("space-y-4 md:space-y-8 lg:space-y-28 ", className)}>
      {featuresContent.map((item) => {
        return (
          <Features
            title={item.title}
            paragraph={item.paragraph}
            icon={item.icon}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
