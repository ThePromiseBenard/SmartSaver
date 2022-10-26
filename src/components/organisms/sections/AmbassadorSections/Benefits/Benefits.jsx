import Heading from "../../../../atoms/Heading";
import Text from "../../../../atoms/Text";
import ApplyNow from "../../../../atoms/ApplyNow";

export const Benefits = () => {
  const benefitsContent = [
    {
      title: "Monthly bonuses",
      paragraph:
        "Every ambassador gets a customised referral link which can be used to earn referral bonus. An ambassador can earn up to N500,000",
      id: 1,
    },
    {
      title: "Self Development",
      paragraph:
        "Development of Intellectual, leadership and creative skills through periodic training",
      id: 2,
    },
    {
      title: "Branded items",
      paragraph:
        " Ambassadors get swag items to show off and share with their friends.",
      id: 3,
    },
    {
      title: "Paid internship",
      paragraph:
        "Paid internship opportunities for Students: Earn the opportunity to intern with us and many of our partner-companies as a student.",
      id: 4,
    },
    {
      title: " Networking",
      paragraph:
        " Networking and collaboration with other ambassadors across the country and continent.",
      id: 5,
    },
    {
      title: "Career support",
      paragraph:
        "Gain access to career mentorship, assistance and experiences that are useful to your career path.",
      id: 1,
    },
  ];
  return (
    <div className=" bg-smartGrayBg py-16 mb-16 md:mb-28 xl:mb-52">
      <div className="containerBox space-y-16">
        <Heading level={3} className="text-center">
          Benefits of becoming a <span className="text-smartOrange">Smart</span>
          Saver Ambassador
        </Heading>
        <div className="grid md:grid-cols-2 xl:grid-cols-3  gap-10 xl:gap-24">
          {benefitsContent.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white py-10 px-6 shadow-md space-y-6"
              >
                <Heading>{item.title}</Heading>
                <Text>{item.paragraph}</Text>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center">
          <ApplyNow />
        </div>
      </div>
    </div>
  );
};
