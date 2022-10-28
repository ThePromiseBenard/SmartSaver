import Heading from "../../../../atoms/Heading";
import Text from "../../../../atoms/Text";
import Button from "../../../../atoms/Button";
import { SmartStaff } from "../../../../molecules/SmartStaff/SmartStaff";

export const Team = ({ members }) => {
  return (
    <div className=" py-10 xl:py-32 space-y-10">
      <div className="containerBox flex flex-wrap gap-6 justify-between">
        <div className="space-y-6 max-w-[749px]">
          <Heading level={2}>Meet our team</Heading>
          <Text level={1}>
            Smartsaver is building an emerging market financial ecosystem. Our
            mission and vision are impact-driven. We are always is always
            looking for great talent like you. Join us today.
          </Text>
        </div>
        <div className=" space-x-6">
          <Button className="!bg-smartOrange border-smartOrange">
            <Text className="!text-white">We are hiring</Text>
          </Button>
          <Button>
            <Text>We are hiring</Text>
          </Button>
        </div>
      </div>
      <SmartStaff members={members} />
    </div>
  );
};
