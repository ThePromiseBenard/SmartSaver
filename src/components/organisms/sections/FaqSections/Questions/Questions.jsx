import Button from "../../../../atoms/Button";
import { useState } from "react";
import { questions } from "./questionsList";
import Accordion from "../../../../atoms/Accordion";

export const Questions = () => {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <div className="containerBox flex flex-col justify-center items-center gap-8 md:gap-28">
      <div className="md:mt-24 mt-10 flex gap-6">
        <div onClick={() => setActiveTab("general")}>
          <Button
            variant="tabs"
            className={
              activeTab === "general"
                ? " !bg-smartOrange/20 !text-smartOrange !font-semibold "
                : ""
            }
          >
            General
          </Button>
        </div>
        <div onClick={() => setActiveTab("security")}>
          <Button
            variant="tabs"
            className={
              activeTab === "security"
                ? " !bg-smartOrange/20 !text-smartOrange !font-semibold"
                : ""
            }
          >
            Security
          </Button>
        </div>
        <div onClick={() => setActiveTab("products")}>
          <Button
            variant="tabs"
            className={
              activeTab === "products"
                ? " !bg-smartOrange/20 !text-smartOrange !font-semibold"
                : ""
            }
          >
            Products
          </Button>
        </div>
      </div>
      <div className=" mb-10 md:mb-28 space-y-4 md:space-y-16">
        {activeTab === "general"
          ? questions[0].general.map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                paragraph={item.answer}
              />
            ))
          : ""}

        {activeTab === "security"
          ? questions[1].security.map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                paragraph={item.answer}
              />
            ))
          : ""}

        {activeTab === "products"
          ? questions[2].products.map((item) => (
              <Accordion
                key={item.id}
                title={item.question}
                paragraph={item.answer}
              />
            ))
          : ""}
      </div>
    </div>
  );
};
