//@ts-nocheck
import Head from "next/head";
import Footer from "../../molecules/Footer";
import NavBar from "../../molecules/NavBar";

export const AppLayout = ({ children, ...customMeta }) => {
  const meta = {
    type: "website",
    description:
      "A Financial Supermarket to help you save, earn High Interest, Invest, Transfer &amp; pay Bills. Access Quick Loans &amp; High Yield Savings.",
    ...customMeta,
  };

  //  Concatinated this to avoid rendering multiple nodes in the title tag

  const title = ` SmartSaver`;

  return (
    <div style={{ maxWidth: "", marginInline: "auto" }}>
      <Head>
        <title>{title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content=": Reliable Savings &amp; Digital Banking Platform"
        />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      {/* Header component Goes here */}
      <NavBar />
      <main>{children}</main>
      {/* Footer component goes here */}
      <Footer/>
    </div>
  );
};
