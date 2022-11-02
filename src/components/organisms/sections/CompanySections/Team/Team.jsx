import Heading from "../../../../atoms/Heading";
import Text from "../../../../atoms/Text";
import Button from "../../../../atoms/Button";
import { SmartStaff } from "../../../../molecules/SmartStaff/SmartStaff";
import SmartLinks from "../../../../atoms/SmartLinks";

export const Team = ({ members }) => {
  return (
    <div className=" py-10 xl:py-32 space-y-10">
      <div className="containerBox flex flex-wrap gap-6 items-center justify-between text-center md:text-left">
        <div className="space-y-6 max-w-[749px]">
          <Heading level={2}>Meet our team</Heading>
          <Text level={1}>
            Smartsaver is building an emerging market financial ecosystem. Our
            mission and vision are impact-driven. We are always looking for
            great talent like you. Join us today.
          </Text>
        </div>
        <div className="w-64 mx-auto md:mx-0 md:w-auto">
          <SmartLinks url="https://smartsaver.zohorecruit.com/careers">
            <Button className="!bg-smartOrange border-smartOrange">
              <Text className="!text-white">Join Us Today</Text>
            </Button>
          </SmartLinks>
        </div>
      </div>
      <SmartStaff members={members} />
    </div>
  );
};
