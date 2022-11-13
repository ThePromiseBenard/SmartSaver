import Link from "next/link";

export const SmartLinks = ({ url, className, children }) => {
  return (
    <Link className={className} href={url}>
      {children}
    </Link>
  );
};
