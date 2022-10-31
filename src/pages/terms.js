import { AppLayout } from "../components/organisms/layout/AppLayout";
import TermsPage from "../components/organisms/pages/Terms";
import { getTermsAndCondition } from "../../Lib/data";

const Terms = ({ conditions }) => {
  console.log(conditions);
  return (
    <AppLayout>
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
