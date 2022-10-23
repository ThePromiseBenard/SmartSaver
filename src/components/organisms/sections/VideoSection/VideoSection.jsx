import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import Button from "../../../atoms/Button";
import {
  AiOutlineCloudDownload,
  AiOutlineUserAdd,
  AiOutlineDatabase,
} from "react-icons/ai";

export const VideoSection = () => {
  return (
    <div className="containerBox space-y-14 md:space-y-28">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Heading level={4}>Let’s Get you started on SmartSaver!</Heading>
          <Text level={1} className="max-w-[618px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Text>
        </div>
        <div className="flex md:justify-end items-center gap-4">
          <Button variant="appleOrange" />
          <Button variant="playOrange" />
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
        <div className="space-y-8 self-center">
          <div className="flex flex-wrap md:gap-6 items-start">
            <div className="h-8 w-8 text-xl md:h-14 md:w-14 text-white bg-smartOrange flex rounded-lg items-center justify-center md:text-2xl">
              <AiOutlineCloudDownload />
            </div>
            <div className="max-w-[375px] md:space-y-2">
              <Heading level={6}>Download The App</Heading>
              <Text>
                Get the SmartSaver App on Google Play Store for Android or App
                Store for iOS.
              </Text>
            </div>
          </div>
          <div className="flex flex-wrap md:gap-6 items-start">
            <div className="h-8 w-8 text-xl md:h-14 md:w-14 text-white bg-smartOrange flex rounded-lg items-center justify-center md:text-2xl">
              <AiOutlineUserAdd />
            </div>
            <div className="max-w-[375px] md:space-y-2">
              <Heading level={6}>Register Within Minutes</Heading>
              <Text>
                Tell us a few details about you to help us create your
                SmartSaver account quickly.
              </Text>
            </div>
          </div>
          <div className="flex flex-wrap md:gap-6 items-start">
            <div className="h-8 w-8 text-xl md:h-14 md:w-14 text-white bg-smartOrange flex rounded-lg items-center justify-center md:text-2xl">
              <AiOutlineDatabase />
            </div>
            <div className="max-w-[375px] md:space-y-2">
              <Heading level={6}>Start Earning, Saving & Banking</Heading>
              <Text>
                .You’re ready to go. Carry out all your transactions within the
                app, from investments, Savings to loan applications, Insurance
                and bill payments..
              </Text>
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-[554px] h-[312px] md:h-[500px] ">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9yIdftCsl2c?rel=0&showinfo=0&autohide=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
