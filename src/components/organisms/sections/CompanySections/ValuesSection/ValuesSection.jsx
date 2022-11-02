import Heading from "../../../../atoms/Heading";
import Text from "../../../../atoms/Text";
import { ValuesBlock } from "../../../../molecules/ValuesBlock/ValuesBlock";

export const ValuesSection = () => {
  const valuesContent = [
    {
      title: "Accountability",
      paragraph:
        "From its community to its staff, SmartSaver aims to promote better workplace effectiveness and satisfaction, but more importantly, a customer relationship that never lacks social responsibility, sustainability and answerability.",
      number: "01",
      className: "bg-valueOne/10",
    },
    {
      title: "Integrity",
      paragraph:
        "A good name is better than gold&quot;. SmartSaver takes this to heart and ferociously operates consistently with a strong set of moral values centered around respect, honesty and responsibility, and to ensure all interactions are aligned with its aims and purposes.",
      number: "02",
      className: "bg-valueTwo/10",
    },
    {
      title: "Efficiency",
      paragraph:
        "Powered with the latest and ever evolving financial technology, SmartSaver gets the most of these by ensuring that people achieve their maximum financial success in the fastest and easiest way possible.",
      number: "03",
      className: "bg-valueThree/10",
    },
    {
      title: "Customer Success",
      paragraph:
        "Without the people, there is no SmartSaver. The success of the people is paramount above all else. Gathering all it’s resources and values, it is the premier mission of SmartSaver to provide happiness and financial success to the people we serve.",
      number: "04",
      className: "bg-valueFour/10",
    },
    {
      title: "Ethical Conduct",
      paragraph:
        "In order to enhance overall morale and performance of the organization, SmartSaver is driven by principles of fairness and decency in all its interaction internally and externally.",
      number: "05",
      className: "bg-valueFive/10",
    },
    {
      title: "Transparency",
      paragraph:
        "Since inception in 2017, SmartSaver has operated with an open-door policy to all. Honest, open and straightforward about all company operations, SmartSaver prioritizes trust and a strengthened relationship with the people.",
      number: "06",
      className: "bg-valueSix/10",
    },
  ];
  return (
    <div>
      <div className="bg-smartGrayBg text-center ">
        <div className="containerBox">
          <div className="py-6 xl:py-36 space-y-4 md:space-y-16">
            <div className="  xl:space-y-4">
              <Heading className="!text-center" level={2}>Our Core Values</Heading>
              <Text level={1}>
                Our success is built firmly on these pillars or values:
              </Text>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-y-8 gap-x-8 xl:gap-y-16">
              {valuesContent.map((item) => (
                <ValuesBlock
                  title={item.title}
                  paragraph={item.paragraph}
                  number={item.number}
                  className={item.className}
                  key={item.number}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
