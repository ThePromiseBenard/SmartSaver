import Button from "../../../../atoms/Button";
import { useState } from "react";

export const Questions = () => {
     const [activeTab, setActiveTab] = useState("general");
  return (
    <div className="py-52 flex gap-6">
      <div onClick={() => setActiveTab("general")}>
        <Button
          variant="tabs"
          className={
            activeTab === "general"
              ? " !bg-smartOrange/20 !text-smartOrange !font-semibold "
              : ""
          }
        >
          Genaral
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
  );
};
