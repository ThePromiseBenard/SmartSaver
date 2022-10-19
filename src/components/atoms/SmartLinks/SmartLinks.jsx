import Link from "next/link";


export const SmartLinks = ({ url, className, children }) => {
  return (
    <Link href={url}>
      <a className={className}>{children}</a>
    </Link>
  );
};
