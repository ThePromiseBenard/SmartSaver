import SmartImage from "../SmartImage";
import appleWhite from "../../../../public/Apple.png";
import appleBlack from "../../../../public/ApplestoreBlack.png";
import playWhite from "../../../../public/Playstore.png";
import playBlack from "../../../../public/PlaystoreBlack.png";
import SmartLinks from "../SmartLinks";

const Button = ({ variant, children }) => {
  switch (variant) {
    case "appleOrange":
      return (
        <SmartLinks url="https://www.apple.com/app-store/">
          <button className="bg-smartOrange p-2 rounded-md relative w-20  md:w-28 lg:w-32">
            <SmartImage
              src={appleWhite}
              alt="apple logo"
              priority={true}
              className="h-full"
            />
          </button>
        </SmartLinks>
      );

    case "appleDark":
      return (
        <SmartLinks url="https://www.apple.com/app-store/">
          <button className=" bg-smartgraybutton p-2 rounded-md relative w-20  md:w-28 lg:w-32">
            <SmartImage
              src={appleWhite}
              alt="apple logo"
              priority={true}
              className="h-full"
            />
          </button>
        </SmartLinks>
      );

    case "appleLight":
      return (
        <SmartLinks url="https://www.apple.com/app-store/">
          <button className=" bg-white p-2 rounded-md relative w-20  md:w-28 lg:w-32">
            <SmartImage src={appleBlack} alt="apple logo" priority={true} />
          </button>
        </SmartLinks>
      );

    case "playOrange":
      return (
        <SmartLinks url="https://play.google.com/store/games">
          <button className=" bg-smartOrange p-2 rounded-md relative w-20  md:w-28 lg:w-32">
            <SmartImage src={playWhite} alt="apple logo" priority={true} />
          </button>
        </SmartLinks>
      );

    case "playDark":
      return (
        <SmartLinks url="https://play.google.com/store/games">
          <button className=" bg-smartgraybutton p-2 rounded-md relative w-20  md:w-28 lg:w-32">
            <SmartImage src={playWhite} alt="apple logo" priority={true} />
          </button>
        </SmartLinks>
      );

    case "playLight":
      return (
        <SmartLinks url="https://play.google.com/store/games">
          <button className=" bg-white p-2 rounded-md relative w-20  md:w-28 lg:w-32">
            <SmartImage src={playBlack} alt="apple logo" priority={true} />
          </button>
        </SmartLinks>
      );

    default:
      return <button className=" bg-white text-red-800 p-2">{children}</button>;
  }
};

export default Button;
