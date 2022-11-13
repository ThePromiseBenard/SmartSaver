import Image from "next/image";
const css = { maxWidth: "100%", height: "auto" };

export const SmartImage = ({ src, alt, priority = false, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      style={css}
      width={width}
      height={height}
    />
  );
};
