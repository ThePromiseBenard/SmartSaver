import clsx from "clsx";

export const Heading = ({ children, level, className }) => {
  switch (level) {
    case 1:
      return (
        <h1
          className={clsx(
            " text-40 md:text-5xl lg:text-6xl font-bold ",
            className
          )}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={clsx(
            " text-4xl md:text-40 lg:text-5xl font-bold",
            className
          )}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={clsx(
            " text-28 md:text-4xl lg:text-40 font-bold",
            className
          )}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          className={clsx(
            " text-2xl md:text-3xl lg:text-4xl font-bold",
            className
          )}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          className={clsx(
            " text-xl md:text-2xl lg:text-3xl font-bold",
            className
          )}
        >
          {children}
        </h5>
      );
    default:
      return (
        <h6
          className={clsx(
            " text-lg md:text-xl lg:text-2xl font-bold",
            className
          )}
        >
          {children}
        </h6>
      );
      break;
  }
};
