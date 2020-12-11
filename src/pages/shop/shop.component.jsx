import React, {useState} from "react";

import Collection from "../../components/collections/collection.component";

import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map((collection) => {
        return <Collection key={collection.id} {...collection} />;
      })}
    </div>
  );
};

export default ShopPage;
