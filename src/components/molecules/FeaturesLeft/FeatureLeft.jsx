import { Features } from "../Features/Features";
import { AiOutlineLike, AiOutlineMessage } from "react-icons/ai";
import clsx from "clsx";

export const FeatureLeft = ({ className }) => {
  const featuresContent = [
    {
      title: "Easy to Use Interface",
      paragraph:
        "Sed aliquet rhoncus risus eu neque. Consectetur enim a est. Id egestas amet pretium eget. Sed aliquet rhoncus risus eu neque. ",
      icon: <AiOutlineLike />,
      id: 1,
    },
    {
      title: "Best Customer Support",
      paragraph:
        "A tool that lets you build a dream website even if you know nothing about web design or programming.",
      icon: <AiOutlineMessage />,
      id: 2,
    },
  ];
  return (
    <div className={clsx("space-y-4 md:space-y-8 lg:space-y-28 xl:mt-16", className)}>
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
