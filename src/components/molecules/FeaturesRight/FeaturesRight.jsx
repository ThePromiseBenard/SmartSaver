import { Features } from "../Features/Features";
import { AiOutlineSecurityScan, AiOutlineLineChart } from "react-icons/ai";
import clsx from "clsx";

export const FeaturesRight = ({className}) => {
  const featuresContent = [
    {
      title: "Secured and Insured",
      paragraph:
        "Sed aliquet rhoncus risus eu neque. Consectetur enim a est. Id egestas amet pretium eget. Sed aliquet rhoncus risus eu neque. ",
      icon: <AiOutlineSecurityScan />,
      id: 1,
    },
    {
      title: "Competitive Interest",
      paragraph:
        "The first business platform to bring together all of your products from one place. ",
      icon: <AiOutlineLineChart />,
      id: 2,
    },
  ];
  return (
    <div className={clsx("space-y-4 md:space-y-8 lg:space-y-28 xl:mt-16", className)}>
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
