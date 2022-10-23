import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import communityImage from "../../../../../public/CoomunityImage.png";
import Button from "../../../atoms/Button";
import SmartImage from "../../../atoms/SmartImage";

export const Community = () => {
  return (
    <div className="containerBox  ">
      <div className=" pb-8 md:pb-16 xl:pb-[88px] mb-20 xl:mb-40">
        <div className="relative bg-smartCommunity rounded-lg md:h-[344px] xl:h-[508px] pb-14 xl:pb-0 ">
          <div className="w-full h-full absolute ">
            <SmartImage src={communityImage} />
          </div>
          <div className="z-[8]  relative w-full flex flex-wrap md:flex-nowrap gap-8 justify-around px-4 pt-8 md:py-16 ">
            <div className="flex gap-6 flex-col justify-center text-center mt-16">
              <Heading level={2} className="capitalize">
                Join Our Community
              </Heading>
              <Text level={1} color="black" className="max-w-lg">
                Risus habitant leo egestas mauris diam eget morbi tempus
                vulputate.
              </Text>
              <div className="space-x-4">
                <Button variant="community">Join Our Community</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
