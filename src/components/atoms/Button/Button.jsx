import SmartImage from "../SmartImage";
import appleWhite from "../../../../public/Apple.png";
import appleBlack from "../../../../public/ApplestoreBlack.png";
import playWhite from "../../../../public/Playstore.png";
import playBlack from "../../../../public/PlaystoreBlack.png";
import SmartLinks from "../SmartLinks";
import clsx from "clsx";

const Button = ({ variant, children, className }) => {
  switch (variant) {
    case "appleOrange":
      return (
        <SmartLinks url="#">
          <button className="bg-smartOrange py-2 px-4 rounded-md relative w-32   lg:w-44 overflow-hidden">
            <SmartImage
              src={appleWhite}
              alt="apple logo"
              priority={true}
              className="h-full"
            />
            <div className="absolute px-6 bg-white/50 backdrop-blur-sm top-2 font-bold md:text-xl -left-6 -rotate-45  ">
              <span> soon !</span>
            </div>
          </button>
        </SmartLinks>
      );

    case "appleDark":
      return (
        <SmartLinks url="#">
          <button className=" bg-smartgraybutton py-2 px-4  rounded-md relative w-32   lg:w-40 overflow-hidden">
            <SmartImage
              src={appleWhite}
              alt="apple logo"
              priority={true}
              className="h-full"
            />
            <div className="absolute px-6 bg-white/50 backdrop-blur-sm top-2 font-bold md:text-xl -left-6 -rotate-45  ">
              <span> soon !</span>
            </div>
          </button>
        </SmartLinks>
      );

    case "appleLight":
      return (
        <SmartLinks url="#">
          <button className=" bg-white py-2 px-4 rounded-md relative w-32   lg:w-40 overflow-hidden">
            <SmartImage src={appleBlack} alt="apple logo" priority={true} />
            <div className="absolute px-6 bg-black/50 backdrop-blur-sm top-2 font-bold md:text-xl -left-6 -rotate-45  ">
              <span> soon !</span>
            </div>
          </button>
        </SmartLinks>
      );

    case "playOrange":
      return (
        <SmartLinks url="https://play.google.com/store/games">
          <button className=" bg-smartOrange p-2 rounded-md relative w-32   lg:w-44">
            <SmartImage src={playWhite} alt="apple logo" priority={true} />
          </button>
        </SmartLinks>
      );

    case "playDark":
      return (
        <SmartLinks url="https://play.google.com/store/games">
          <button className=" bg-smartgraybutton p-2 rounded-md relative w-32   lg:w-40">
            <SmartImage src={playWhite} alt="apple logo" priority={true} />
          </button>
        </SmartLinks>
      );

    case "playLight":
      return (
        <SmartLinks url="https://play.google.com/store/games">
          <button className=" bg-white p-2 rounded-md relative w-32   lg:w-40">
            <SmartImage src={playBlack} alt="apple logo" priority={true} />
          </button>
        </SmartLinks>
      );

    case "community":
      return (
        <SmartLinks url="https://www.facebook.com/groups/498286373844460/?ref=share_group_link">
          <button
            className={clsx(
              " bg-smartOrange font-medium py-2 px-4 md:py-4 text-white md:px-2 rounded-md relative    lg:w-44",
              className
            )}
          >
            Join The Community
          </button>
        </SmartLinks>
      );
    case "tabs":
      return (
        <button
          className={clsx(
            " bg-tabsBg font-medium py-2 px-4 md:py-4 text-black/60 md:px-2 rounded-md relative    lg:w-44",
            className
          )}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className={clsx(" bg-white border py-3 px-8 rounded-lg", className)}
        >
          {children}
        </button>
      );
  }
};

export default Button;
