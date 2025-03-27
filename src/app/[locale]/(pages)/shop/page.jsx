import React from "react";

import AppData from "@data/app.json";
import ProductsData from "@data/products.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import PageBanner from "@/src/app/_components/PageBanner";
import ProductsGrid from "@/src/app/_components/products/ProductsGrid";

export const metadata = {
  title: {
    default: "Store",
  },
  description: AppData.settings.siteDescription,
};

async function ShopPage() {
  return (
    <OkaiLayout>
      <PageBanner
        pageTitle={"Shop!"}
        breadTitle={"Store"}
        bgImage={"/img/banners/20.jpg"}
      />

      <ProductsGrid items={ProductsData.items} />
    </OkaiLayout>
  );
}
export default ShopPage;
