import Image from "next/future/image";
const css = { maxWidth: "100%", height: "auto" };

export const SmartImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} style={css} />;
};
