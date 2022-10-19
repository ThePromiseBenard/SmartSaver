import SmartLinks from "../../atoms/SmartLinks";
import {
  IoMail,
  IoPhonePortrait,
  IoLocation,
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";
import Button from "../../atoms/Button";

export const Footer = () => {
  return (
    <footer className=" bg-smartFooterBg w-full lg:h-[499px] lg:pt-20 md:space-y-16 pb-4">
      <div className="containerBox text-smartFooter flex flex-col md:flex-row  justify-between flex-wrap">
        <div className="py-4 md:order-3 w-64 lg:w-[250px]">
          <h5 className="text-lg md:text-xl capitalize font-semibold mt-2 mb-12">
            reach us
          </h5>

          <div className="text-sm md:text-base font-medium">
            <p className="flex items-center gap-2 my-4">
              <span>
                <IoMail size={24} className="text-smartOrange " />
              </span>
              Care@smartsaver.ng
            </p>
            <p className="flex items-center gap-2 my-4">
              <span>
                <IoPhonePortrait size={24} className="text-smartOrange" />
              </span>
              080 000 0000 000
            </p>
            <p className="flex items-center gap-2 my-4">
              <span>
                <IoLocation size={24} className="text-smartOrange" />
              </span>
              No, 9, The providence street, Lekki phase 1, Lekki, Lagos.
            </p>
            <a
              href="https://wa.me/message/JHSRKEQRR46CK1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 my-4"
            >
              <IoLogoWhatsapp size={24} className="text-smartOrange" />
              Care@smartsaver.ng
            </a>
          </div>
        </div>

        <div className="flex gap-32 lg:gap-64 py-4">
          <div className="py-4">
            <h5 className="text-lg md:text-xl capitalize font-semibold mb-8">
              Company
            </h5>

            <div className="text-sm md:text-base font-medium capitalize flex flex-col gap-5 justify-center">
              <SmartLinks url="/company">about us</SmartLinks>
              <a
                href="https://smartsaver.zohorecruit.com/careers"
                target="_blank"
                rel="noopener noreferrer"
              >
                careers
              </a>
              <SmartLinks url="/company">FAQ</SmartLinks>
              <SmartLinks url="/company">blog</SmartLinks>
            </div>
          </div>
          <div className="py-4">
            <h5 className="text-lg md:text-xl capitalize font-semibold mb-8">
              features
            </h5>

            <div className="text-sm md:text-base font-medium capitalize flex flex-col gap-5 justify-center">
              <p>savings</p>
              <p>investments</p>
              <p>bill payments</p>
              <p>loans</p>
            </div>
          </div>
        </div>

        <div className=" py-4">
          <div className="py-4">
            <h5 className="text-lg md:text-xl capitalize font-semibold mb-8">
              legal
            </h5>

            <div className="text-sm md:text-base font-medium capitalize flex flex-col gap-5 justify-center">
              <SmartLinks url="/privacy">privacy</SmartLinks>
              <SmartLinks url="/terms">terms and conditions</SmartLinks>
              <Button variant="playLight" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-smartFooter containerBox flex flex-wrap justify-between items-center gap-4">
        <div>
          <p>&copy; 2022 SmartSaver. All rights reserved</p>
        </div>
        <div className="flex items-center gap-4">
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a href="">
              <IoLogoInstagram size={18} />
            </a>
          </div>
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a href="">
              <IoLogoFacebook size={18} />
            </a>
          </div>
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a href="">
              <IoLogoTwitter size={18} />
            </a>
          </div>
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a href="">
              <IoLogoLinkedin size={18} />
            </a>
          </div>
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a href="">
              <IoLogoYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
