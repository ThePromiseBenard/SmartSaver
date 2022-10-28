import { AppLayout } from "../components/organisms/layout/AppLayout";
import TermsPage from "../components/organisms/pages/Terms";

const Terms = ({ members }) => {
  console.log(members);
  return (
    <AppLayout>
      <TermsPage />
    </AppLayout>
  );
};

export default Terms;


