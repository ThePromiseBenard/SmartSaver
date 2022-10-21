import SmartImage from "../../../atoms/SmartImage";
import CardText from "../../../molecules/CardText";
import ControlImage from "../../../../../public/ImageTest.png";
import Text from "../../../atoms/Text";

export const ControlLife = () => {
  return (
    <div className="containerBox grid md:grid-cols-2 gap-4 md:gap-16">
      <div className="bg-smartOrange pt-4 px-4 rounded-lg">
        <SmartImage src={ControlImage} alt="loan image" />
      </div>
      <div className="flex justify-center items-center">
        <CardText title="Control Your Life">
          <Text level={1} color="black">
            Insure your health and properties with different Insurance plans
            today at SmartSaver app. Download SmartSaver.
          </Text>
        </CardText>
      </div>
    </div>
  );
};
