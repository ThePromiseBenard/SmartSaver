import { AppLayout } from "../components/organisms/layout/AppLayout";
import { Home } from "../components/organisms/pages/Home/Home";

const Landing = () => {
  return (
    <AppLayout title="Home">
      <Home />
    </AppLayout>
  );
};

export default Landing;
