import CardText from "../../../molecules/CardText";
import WaysList from "../../../molecules/WaysList";
import Text from "../../../atoms/Text";

export const SavingWays = () => {
  return (
    <div className="bg-smartGrayBg py-6 md:py-20" id="savings">
      <div className="containerBox grid gap-10 md:grid-cols-2">
        <div className="flex items-center">
          <CardText title="Ways to Build Your Savings and Earn High Interest">
            <Text level={2} color="black" className="max-w-[550px]">
              SmartSaver pays you high interest from 20% to 75% interest on your
              savings, earns interest on your daily wallet balance and
              Investment savings that pays you interest upfront..
            </Text>
          </CardText>
        </div>
        <WaysList />
      </div>
    </div>
  );
};
