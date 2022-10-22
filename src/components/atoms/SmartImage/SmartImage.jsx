import Image from "next/future/image";
const css = { maxWidth: "100%", height: "auto" };

export const SmartImage = ({ src, alt, priority = false, className }) => {
  return (
    <Image
      placeholder="blur"
      src={src}
      alt={alt}
      priority={priority}
      style={css}
    />
  );
};
