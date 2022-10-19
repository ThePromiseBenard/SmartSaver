import { AppLayout } from "../components/organisms/layout/AppLayout";
import Text from "../components/atoms/Text";
import Heading from "../components/atoms/Heading";
import SmartLinks from "../components/atoms/SmartLinks";
import Button from "../components/atoms/Button";
import IconBox from "../components/atoms/IconBox";
import { AiOutlineLike } from "react-icons/ai";
import Features from "../components/molecules/Features";
import CardText from "../components/molecules/CardText";
import NavBar from "../components/molecules/NavBar";

export default function Home() {
  return (
    <AppLayout>
      <div className="h-screen bg-smartGrayBg py-4"></div>
    </AppLayout>
  );
}
