import clsx from "clsx";

export const Text = ({ children, level, color, className }) => {
  switch (level) {
    case 1:
      return (
        <p
          className={clsx(
            `text-base md:text-lg lg:text-xl ${
              color === "black" ? " text-smartBlack " : "text-smartGray"
            }`,
            className
          )}
        >
          {children}
        </p>
      );

    case 2:
      return (
        <p
          className={clsx(
            `text-sm md:text-base lg:text-lg ${
              color === "black" ? " text-smartBlack " : "text-smartGray"
            }`,
            className
          )}
        >
          {children}
        </p>
      );
    default:
      return (
        <p
          className={clsx(
            `text-xs md:text-sm lg:text-base ${
              color === "black" ? " text-smartBlack " : "text-smartGray"
            }`,
            className
          )}
        >
          {children}
        </p>
      );
      break;
  }
};
