import Image from "next/image";

export const SmartImage = ({
  src,
  alt,
  priority = false,
  className,
  width,
  height,
}) => {
  return (
    <div>
      <Image
        placeholder="blur"
        src={src}
        alt={alt}
        layout="responsive"
        priority={priority}
        className={className}
        width={width}
        height={height}
      />
    </div>
  );
};
