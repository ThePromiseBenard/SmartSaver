import PrivacyPage from "../components/organisms/pages/Privacy";
import { AppLayout } from "../components/organisms/layout/AppLayout";
import { getPrivacyPolicies } from "../../Lib/data";

const Privacy = ({policies}) => {
  return (
    <AppLayout title="Privacy">
      <PrivacyPage policies={policies} />
    </AppLayout>
  );
};

export default Privacy;


export async function getStaticProps() {
  const policies = await getPrivacyPolicies();
  return {
    props: {
      policies,
    },
    revalidate: 10,
  };
}