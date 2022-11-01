//@ts-nocheck
import Head from "next/head";
import Footer from "../../molecules/Footer";
import NavBar from "../../molecules/NavBar";

export const AppLayout = ({ children, ...customMeta }) => {
  const meta = {
    type: "website",
    description:
      "A Financial Supermarket to help you save, earn High Interest, Invest, Transfer &amp; pay Bills. Access Quick Loans &amp; High Yield Savings.",
    image: "https://smart-saver.vercel.app/static/smartsaver-mete-image.jpg",
    ...customMeta,
  };

  //  Concatinated this to avoid rendering multiple nodes in the title tag

  const title = `${
    meta.title || ""
  } | SmartSaver: Reliable Savings &amp; Digital Banking Platform`;

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
        <meta
          name="keywords"
          content="Automated Savings, Banks in Nigeria, Automated Online Savings, Online Savings, Online Banks, How to Save,Online Investment, where to save/Invest in Nigeria, SmartSaver, savings goals, Savings Target, SmartSaver, Lending in Nigeria, Access Loans, Investments in Nigeria, Emergency Fund, Reasons to save, Online Investment, Investment, Earn More Money, SmartSaver 30% interest, SmartSaver, High yield savings, High Interest banks, Interest, Digital Banks, making Money Online, Online Investment, loan offering firm, savings platform, piggybank Nigeria, Nigeria, Daily savings, weekly savings, save in Nigeria"
        />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:title"
          content="SmartSaver: Reliable Savings &amp; Digital Banking Platform"
        />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_SmartSaverNG" />
        <meta
          name="twitter:title"
          content="SmartSaver: Reliable Savings &amp; Digital Banking Platform"
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Header component Goes here */}
      <NavBar />
      <main>{children}</main>
      {/* Footer component goes here */}
      <Footer />
      
    </div>
  );
};
