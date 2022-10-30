import { AppLayout } from "../components/organisms/layout/AppLayout";
import CompanyPage from "../components/organisms/pages/Company";
import { getMembers } from "../../Lib/data";

const Company = ({ members }) => {
  return (
    <AppLayout>
      <CompanyPage members={members} />
    </AppLayout>
  );
};

export default Company;

export async function getStaticProps() {
  const members = await getMembers();
  return {
    props: {
      members,
    },
    revalidate: 10,
  };
}
