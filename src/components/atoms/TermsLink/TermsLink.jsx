import Text from "../Text";
import SmartLinks from "../SmartLinks";

export const TermsLink = () => {
  return (
    <Text level={2}>
      Please read our{" "}
      <SmartLinks className="text-smartOrange/80 !bold" url="/terms">
        Terms
      </SmartLinks>{" "}
      and{" "}
      <SmartLinks className="text-smartOrange/80 !bold" url="/privacy">
        Privacy Policy
      </SmartLinks>
    </Text>
  );
};
