import SmartLinks from "../../atoms/SmartLinks";
import Button from "../../atoms/Button";
import SmartLogo from "../../../../public/SmartSaverLogo.svg";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <div className="  py-4 bg-transparent  absolute w-full ">
        <div className="containerBox flex items-center justify-between  relative gap-4">
          <div className=" z-20">
            <SmartLinks url="/">
              <SmartLogo className="  w-44 md:w-56" />
            </SmartLinks>
          </div>
          <div onClick={navHandler} className="md:hidden cursor-pointer z-20">
            {nav ? <HiOutlineX size={34} /> : <HiOutlineMenu size={34} />}
          </div>

          <div
            className={
              nav
                ? "   transition-all ease-in  delay-150  absolute md:static md:h-auto  h-screen w-full  bottom-0 top-0 right-0 left-0 flex flex-col md:flex-row gap-8 md:items-center z-10  pt-28 px-4 md:p-0 "
                : "   transition-all ease-in  delay-150 -translate-x-full md:-translate-x-0 absolute md:static md:h-auto  h-screen w-full  bottom-0 top-0 right-0 left-0 flex flex-col md:flex-row gap-8 md:items-center z-10  pt-28 px-4 md:p-0 "
            }
          >
            <ul className="flex items-center md:flex-row md:gap-8  flex-col w-full md:w-auto justify-self-center mx-auto text-smartGray text-lg font-medium capitalize">
              <SmartLinks
                className="w-full pb-4 mb-8 border-b-2 md:border-b-0 md:p-0 md:m-0  md:w-auto"
                url="/company"
              >
                company
              </SmartLinks>
              <SmartLinks
                className="w-full pb-4 mb-8 border-b-2 md:border-b-0 md:p-0 md:m-0   md:w-auto"
                url="/faq"
              >
                FAQ
              </SmartLinks>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="w-full pb-4 mb-8 md:p-0 md:m-0 md:w-auto"
                href="https://smartsaver-ng.medium.com/"
              >
                blog
              </a>
            </ul>

            <div className="space-x-4 flex items-center">
              <Button variant="appleDark" />
              <Button variant="playDark" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
