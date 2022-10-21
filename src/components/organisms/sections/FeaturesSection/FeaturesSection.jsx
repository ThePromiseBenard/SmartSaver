import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import FeaturesLeft from "../../../molecules/FeaturesLeft";
import FeaturesRight from "../../../molecules/FeaturesRight";
import featureImage from "../../../../../public/Features Image.png";
import SmartImage from "../../../atoms/SmartImage";

export const FeaturesSection = () => {
  return (
    <div className="space-y-16 containerBox">
      <div className="text-center space-y-4">
        <Heading level={3}>Built With You In Mind</Heading>
        <Text level={1} className="max-w-[919px] mx-auto">
          Sed aliquet rhoncus risus eu neque. Consectetur enim a est. Id egestas
          amet pretium eget. Sed aliquet rhoncus risus eu neque. Consectetur
          enim a est.
        </Text>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <FeaturesLeft />
        <div className="hidden lg:block" >
          <SmartImage src={featureImage} />
        </div>
        <FeaturesRight />
      </div>
    </div>
  );
};
