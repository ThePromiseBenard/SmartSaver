import { AppLayout } from "../components/organisms/layout/AppLayout";
import Text from "../components/atoms/Text";
import Heading from "../components/atoms/Heading";
import SmartLinks from "../components/atoms/SmartLinks";
import Button from "../components/atoms/Button";


export default function Home() {
  return (
    <AppLayout>
      <div className="h-screen bg-smartGrayBg py-4">
        <div className="containerBox">
          <Text color="">testing out</Text>
          <Heading level={1}> am a header</Heading>
          <SmartLinks url="/about" className="text-red-800 underline">
            about
          </SmartLinks>
          <Button variant="appleLight" />
        </div>
      </div>
    </AppLayout>
  );
}
