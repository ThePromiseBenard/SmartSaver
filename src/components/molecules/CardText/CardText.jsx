import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";

export const CardText = ({ title, children }) => {
  return (
    <div className=" space-y-4 md:space-y-8">
      <Heading level={2}>{title}</Heading>
      {children}
      <div className="space-x-4">
        <Button variant="appleOrange"></Button>
        <Button variant="playOrange"></Button>
      </div>
    </div>
  );
};
