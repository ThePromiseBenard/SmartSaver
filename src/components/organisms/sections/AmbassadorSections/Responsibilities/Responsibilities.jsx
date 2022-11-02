import Heading from "../../../../atoms/Heading";
import Text from "../../../../atoms/Text";
import ApplyNow from "../../../../atoms/ApplyNow";

export const Responsibilities = () => {
  const responsibilityContent = [
    {
      title: "Brand  Representation",
      paragraph:
        "An ambassador should be able to respond to queries about the brand online/offline and also identify opportunities the brand can leverage on",
      id: 1,
    },
    {
      title: "Social Influence",
      paragraph:
        "Our ambassador must consistently come up with ideas at least once every month that can create drive more awareness for the brand as well as sharing, retweeting, reposting SmartSaver’s online content.",
      id: 2,
    },
    {
      title: "Brand Visibility",
      paragraph:
        "An ambassador is the brand’s eye on your circle, ensuring that SmartSaver brand is well known within the Ambassadors location.",
      id: 3,
    },
  ];
  return (
    <div className="containerBox">
      <div className=" space-y-10 pb-16 xl:space-y-24 mt-8">
        <div>
          <Heading className=" xl:!text-center" level={3}>
            Responsibilities of a{" "}
            <span className="text-smartOrange">smart</span>
            saver ambassador
          </Heading>
        </div>
        <div className="grid  md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 flex-1">
          {responsibilityContent.map((item) => {
            return (
              <div
                key={item.id}
                className="md:space-y-6 space-y-2 xl:px-[1.55rem] bg-white shadow-lg hover:shadow-xl transition-all delay-100 ease-in p-4 text-center md:text-left"
              >
                <Heading level={5}>{item.title}</Heading>
                <Text level={2}>{item.paragraph}</Text>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center ">
          <ApplyNow />
        </div>
      </div>
    </div>
  );
};
