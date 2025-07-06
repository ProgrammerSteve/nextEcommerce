import React from "react";
import LeftContainer from "./subcomponents/LeftContainer";
import RightContainer from "./subcomponents/RightContainer";
import { Product } from "../../types/items";

interface Props {
  product: Product;
  qtyInCart: number;
  handleModalAddItem: () => Promise<void>;
  handleModalDecrementItem: () => Promise<void>;
}

const ItemCard: React.FC<Props> = ({
  product,
  qtyInCart,
  handleModalAddItem,
  handleModalDecrementItem,
}) => {
  return (
    <div className="h-[100%] md:h-[90%] w-[100%] md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto bg-white md:rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 scrollbar-hide border border-gray-100">
      <LeftContainer product={product} />
      <RightContainer
        product={product}
        qtyInCart={qtyInCart}
        handleModalAddItem={handleModalAddItem}
        handleModalDecrementItem={handleModalDecrementItem}
      />
    </div>
  );
};

export default ItemCard;
