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
    <div style={{ marginInline: "auto" }}>
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
        {/* <link rel="preload" as="image" href="/SmartLogoMain.png " />
        <link rel="preload" as="image" href="/capricon2.png " />
        <link rel="preload" as="image" href="/FirstCapitol2.png " />
        <link rel="preload" as="image" href="/Paystack_Logo1.png " />
        <link rel="preload" as="image" href="/providus2.png " />
        <link rel="preload" as="image" href="/starBg.png " />
        <link rel="preload" as="image" href="/Underline.png" />
        <link rel="preload" as="image" href="/sterling2.png " /> */}
      </Head>
      {/* Header component Goes here */}
      <NavBar />
      <main>{children}</main>
      {/* Footer component goes here */}
      <Footer />
    </div>
  );
};
