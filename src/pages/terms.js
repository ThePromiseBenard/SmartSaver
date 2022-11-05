import { AppLayout } from "../components/organisms/layout/AppLayout";
import TermsPage from "../components/organisms/pages/Terms";
import { getTermsAndCondition } from "../../Lib/data";

const Terms = ({ conditions }) => {
  return (
    <AppLayout title="Terms">
      <TermsPage conditions={conditions} />
    </AppLayout>
  );
};

export default Terms;

export async function getStaticProps() {
  const conditions = await getTermsAndCondition();
  return {
    props: {
      conditions,
    },
    revalidate: 10,
  };
}
