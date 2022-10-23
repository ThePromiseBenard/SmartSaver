import SmartImage from "../../../atoms/SmartImage";
import CardText from "../../../molecules/CardText";
import ControlImage from "../../../../../public/ImageTest.png";
import Text from "../../../atoms/Text";

export const ControlLife = () => {
  return (
    <div className="containerBox">
      <div className=" mt-14 md:mt-28 xl:mt-48 mb-24 grid md:grid-cols-2 gap-4 md:gap-16 ">
        <div className="bg-smartOrange pt-4 px-4 md:px-8 md:pt-8 rounded-2xl  2xl:w-[529px]">
          <SmartImage src={ControlImage} alt="loan image" />
        </div>
        <div className="flex justify-center items-center">
          <CardText title="Control Your Life">
            <Text level={1} color="black">
              Insure your health and properties with different Insurance plans
              today at SmartSaver app.
            </Text>
          </CardText>
        </div>
      </div>
    </div>
  );
};
