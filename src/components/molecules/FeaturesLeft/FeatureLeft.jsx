import { Features } from "../Features/Features";
import {
  AiOutlineSecurityScan,
  AiOutlineLineChart,
} from "react-icons/ai";
import clsx from "clsx";

export const FeatureLeft = ({ className }) => {
  const featuresContent = [
    {
      title: "Competitive Interest",
      paragraph:
        "SmartSaver breaks earning barriers created by the traditional banks that refuse to pay depositors or savers interest in order to pay huge to the owners.",
      icon: <AiOutlineLineChart />,
      id: 1,
    },
    {
      title: "Secured & Insured:",
      paragraph:
        "The funds are held and invested at NDIC insured banks and processed through a PCIDSS Level 1 Compliant. Your personal information is anonymized, encrypted and securely stored.",
      icon: <AiOutlineSecurityScan />,
      id: 2,
    },
  ];
  return (
    <div className={clsx("space-y-4 md:space-y-8 lg:space-y-28 ", className)}>
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
