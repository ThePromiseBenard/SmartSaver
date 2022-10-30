import CardText from "../../../../molecules/CardText";
import SmartImage from "../../../../atoms/SmartImage";
import CustomersImage from "../../../../../../public/customerImage.png";
import Text from "../../../../atoms/Text";

export const CustomerSection = () => {
  return (
    <div className="bg-smartOrange/20">
      <div className="containerBox ">
        <div className="grid md:grid-cols-2 gap-8 py-4 md:py-0">
          <div className="max-w-[445px] flex items-center xl:ml-20">
            <CardText title="With Over 100,000 happy customers">
              <Text level={2}>
                Join over 100,000 happy users benefiting from SmartSaver
                solutions.
                <br /> Save & Earn with SmartSaver Today
              </Text>
            </CardText>
          </div>
          <div>
            <SmartImage src={CustomersImage} alt="customers image" />
          </div>
        </div>
      </div>
    </div>
  );
};
