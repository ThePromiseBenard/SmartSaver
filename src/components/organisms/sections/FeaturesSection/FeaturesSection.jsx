import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import FeaturesLeft from "../../../molecules/FeaturesLeft";
import FeaturesRight from "../../../molecules/FeaturesRight";
import featureImage from "../../../../../public/Features Image.png";
import SmartImage from "../../../atoms/SmartImage";

export const FeaturesSection = () => {
  return (
    <div className=" space-y-8 md:space-y-16 containerBox ">
      <div className="md:text-center space-y-4 mt-8">
        <Heading level={3}>Built With You In Mind</Heading>
        <Text level={1} className="max-w-[919px] mx-auto">
          We are a Fintech Service Company developed to offer flexible and
          disciplined financial inclusiveness in a responsible and sustainable
          way.
        </Text>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:pb-28">
        <FeaturesLeft />
        <div className="hidden lg:block">
          <SmartImage src={featureImage} alt="woman smilling"/>
        </div>
        <FeaturesRight />
      </div>
    </div>
  );
};
