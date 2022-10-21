import Image from "next/future/image";
import clsx from "clsx";

export const SmartImage = ({ src, alt, priority = false, className }) => {
  return (
    <div className={clsx("relative flex items-end justify-center", className)}>
      <Image
        placeholder="blur"
        src={src}
        alt={alt}
        layout="responsive"
        priority={priority}
      />
    </div>
  );
};
