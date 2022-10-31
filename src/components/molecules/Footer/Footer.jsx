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
    <footer className=" bg-smartFooterBg w-full lg:pt-16 md:space-y-16 pb-8">
      <div className="containerBox text-smartFooter flex flex-col md:flex-row  justify-between flex-wrap">
        <div className="flex gap-20  xl:gap-44 py-4">
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
              <SmartLinks url="/ambassador">become an ambassador</SmartLinks>
              <SmartLinks url="/faq">FAQ</SmartLinks>
              <a
                href="https://smartsaver-ng.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                blog
              </a>
            </div>
          </div>
          <div className="py-4">
            <h5 className="text-lg md:text-xl capitalize font-semibold mb-8">
              features
            </h5>

            <div className="text-sm md:text-base font-medium capitalize flex flex-col gap-5 justify-center">
              <a href="#insurance">savings</a>
              <a href="#loans">investments</a>
              <a href="#payments">bill payments</a>
              <a href="#loans">loans</a>
              <a href="#insurance">Insurance </a>
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
              <Button variant="appleLight" />
            </div>
          </div>
        </div>

        <div className="py-4  w-64 lg:w-[250px]">
          <h5 className="text-lg md:text-xl capitalize font-semibold mt-2 mb-12">
            reach us
          </h5>

          <div className="text-sm md:text-base font-medium">
            <a
              href="mailto:Care@smartsaver.ng"
              className="flex items-center gap-2 my-4"
            >
              <span>
                <IoMail size={24} className="text-smartOrange " />
              </span>
              Care@smartsaver.ng
            </a>
            <a
              href="tel:+234 701 444 9223"
              className="flex items-center gap-2 my-4"
            >
              <span>
                <IoPhonePortrait size={24} className="text-smartOrange" />
              </span>
              080 000 0000 000
            </a>
            <a href="#" className="flex items-center gap-2 my-4">
              <span>
                <IoLocation size={24} className="text-smartOrange" />
              </span>
              No, 9, The providence street, Lekki phase 1, Lekki, Lagos.
            </a>
            <a
              href="https://wa.me/message/JHSRKEQRR46CK1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 my-4"
            >
              <IoLogoWhatsapp size={24} className="text-smartOrange" />
              Whatsapp Us
            </a>
          </div>
        </div>
      </div>

      <div className="text-smartFooter containerBox flex flex-wrap justify-between items-center gap-4">
        <div>
          <p>&copy; 2022 SmartSaver. All rights reserved</p>
        </div>
        <div className="flex items-center gap-4">
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a
              href="https://instagram.com/smartsavern?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={18} />
            </a>
          </div>
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a
              href="https://www.facebook.com/smartsaverNG/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook size={18} />
            </a>
          </div>
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a
              href="https://twitter.com/_SmartSaverNG?t=1PpYoR41V3TJYDZjYe1WvA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoTwitter size={18} />
            </a>
          </div>
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a
              href="https://www.linkedin.com/company/smartsaver-ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin size={18} />
            </a>
          </div>
          <div className=" bg-smartgraybutton p-2 rounded-full ">
            <a
              href="https://youtube.com/channel/UC1B2yjiMguUzGSIYTCBM40Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
