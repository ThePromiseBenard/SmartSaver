import Heading from "../../../atoms/Heading";
import Text from "../../../atoms/Text";
import Button from "../../../atoms/Button";
import VideoImage from "../../../../../public/Video-Image.png";
import { useState, useEffect } from "react";
import SmartImage from "../../../atoms/SmartImage";
import {
  AiOutlineCloudDownload,
  AiOutlineUserAdd,
  AiOutlineDatabase,
  AiOutlineClose,
  AiFillPlayCircle,
} from "react-icons/ai";

export const VideoSection = () => {
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!openModal);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <div className="containerBox relative">
      <div className=" space-y-14 md:space-y-16 py-14 md:py-28 xl:py-32">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Heading level={4}>Let’s Get you started on SmartSaver!</Heading>
            <Text level={1}>
              Saving is an uncommon habit, develop one today, sit and watch your
              finances grow while you set long term goals.
            </Text>
          </div>

          <div className="flex md:justify-center items-center gap-4 xl:ml-36">
            <Button variant="appleOrange" />
            <Button variant="playOrange" />
          </div>
        </div>

        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between gap-8">
          <div className=" space-y-8 md:space-y-20 self-center">
            <div className="flex flex-wrap gap-3 md:gap-6 items-start">
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
            <div className="flex flex-wrap gap-3 md:gap-6 items-start">
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

            <div className="flex flex-wrap gap-3 md:gap-6 items-start">
              <div className="h-8 w-8 text-xl md:h-14 md:w-14 text-white bg-smartOrange  flex rounded-lg items-center justify-center md:text-2xl">
                <AiOutlineDatabase />
              </div>
              <div className="max-w-[375px] md:space-y-2">
                <Heading level={6}>Start Earning, Saving & Banking</Heading>
                <Text>
                  You’re ready to go. Carry out all your transactions within the
                  app, from investments, Savings to loan applications, Insurance
                  and bill payments..
                </Text>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="lg:w-[615px] md:w-[400px] relative ">
              <SmartImage src={VideoImage} alt="image cover for smart video" />
              <div
                className=" absolute text-6xl xl:text-8xl text-smartOrange top-[40%] left-[40%] cursor-pointer"
                onClick={() => {
                  handleModal();
                }}
              >
                <AiFillPlayCircle />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pop for video */}
      {openModal && (
        <div className="fixed bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center   inset-0">
          <div className="containerBox">
            <div className=" w-full p-4 md:p-6 xl:p-8 bg-white h-[250px] md:h-[450px] xl:h-[600px] flex flex-col items-end gap-8">
              <div
                className="md:text-lg xl:text-2xl cursor-pointer"
                onClick={() => {
                  handleModal();
                }}
              >
                <AiOutlineClose />
              </div>
              <div className=" md:w-[600px] h-[494px] xl:w-[1000px]  xl:h-[594px]  ">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/9yIdftCsl2c?rel=0&showinfo=0&autohide=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
