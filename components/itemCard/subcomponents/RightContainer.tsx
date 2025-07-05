import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_CART_ITEM, ADD_CART_ITEM, REMOVE_CART_ITEM } from "@/utils/gqlQueries/mutations";
import { GET_CART_BY_EMAIL } from "@/utils/gqlQueries/queries";
import { useGetCartByEmail } from "@/utils/hooks/useGetCartByEmail";
import client from "@/services/apollo-client";

type Product = {
  name: string;
  src: string;
  price: number;
  alt: string;
  stock: number;
  description: string;
  id: string;
};

interface Props {
  product: Product;
  qtyInCart: number;
  handleModalAddItem: () => Promise<void>;
  handleModalDecrementItem: () => Promise<void>;
}

const StarRating = ({
  rating = 4.8,
  reviews = 127,
}: {
  rating?: number;
  reviews?: number;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-medium text-gray-700">{rating}</span>
      <span className="text-sm text-gray-500">({reviews} reviews)</span>
    </div>
  );
};

const FeatureItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
    <div className="text-blue-600">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-900">{label}</p>
      <p className="text-xs text-gray-600">{value}</p>
    </div>
  </div>
);

const RightContainer: React.FC<Props> = ({
  product,
  qtyInCart,
  handleModalAddItem,
  handleModalDecrementItem,
}) => {
  const [activeTab, setActiveTab] = useState<"about" | "features" | "reviews">(
    "about"
  );

  const tabs = [
    { id: "about" as const, label: "About", icon: "📝" },
    { id: "features" as const, label: "Features", icon: "⚡" },
    { id: "reviews" as const, label: "Reviews", icon: "⭐" },
  ];

  return (
    <div className="col-span-1 flex flex-col bg-white">
      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex space-x-1 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 h-full overflow-y-auto scrollbar-hide">
          {activeTab === "about" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Product Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h4 className="text-md font-medium text-gray-900 mb-3">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Premium quality materials
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Durable construction
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Easy to use and maintain
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "features" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <FeatureItem
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"
                      />
                    </svg>
                  }
                  label="Dimensions"
                  value="8cm × 8cm × 15cm"
                />
                <FeatureItem
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"
                      />
                    </svg>
                  }
                  label="Weight"
                  value="10 oz"
                />
                <FeatureItem
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                  label="Warranty"
                  value="2 Year Limited"
                />
                <FeatureItem
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  }
                  label="Material"
                  value="Premium Grade"
                />
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Customer Reviews
                </h3>
                <StarRating rating={4.8} reviews={127} />
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <StarRating rating={5} reviews={0} />
                    <span className="text-sm font-medium text-gray-900">
                      Sarah M.
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Excellent quality and fast shipping. Exactly as described!"
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <StarRating rating={4} reviews={0} />
                    <span className="text-sm font-medium text-gray-900">
                      Mike R.
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Great product, would recommend to others."
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Price and Cart Section */}
      <PriceContainer
        product={product}
        qtyInCart={qtyInCart}
        handleModalAddItem={handleModalAddItem}
        handleModalDecrementItem={handleModalDecrementItem}
      />
    </div>
  );
};

const PriceContainer: React.FC<Props> = ({
  product,
  qtyInCart,
  handleModalAddItem,
  handleModalDecrementItem,
}) => {
  // Local state for quantity selection (separate from cart)
  const [localQuantity, setLocalQuantity] = useState(qtyInCart);
  const [isUpdating, setIsUpdating] = useState(false);

  // Get cart data and mutations
  const { session, cartId, cartItems } = useGetCartByEmail();
  const [addCartItem] = useMutation(ADD_CART_ITEM, {
    refetchQueries: [{ query: GET_CART_BY_EMAIL }],
  });
  const [updateCartItem] = useMutation(UPDATE_CART_ITEM, {
    refetchQueries: [{ query: GET_CART_BY_EMAIL }],
  });
  const [removeCartItem] = useMutation(REMOVE_CART_ITEM, {
    refetchQueries: [{ query: GET_CART_BY_EMAIL }],
  });

  // Update local quantity when cart quantity changes (e.g., from other sources)
  React.useEffect(() => {
    setLocalQuantity(qtyInCart);
  }, [qtyInCart]);

  const handleLocalIncrement = () => {
    if (localQuantity < product.stock) {
      setLocalQuantity(prev => prev + 1);
    }
  };

  const handleLocalDecrement = () => {
    if (localQuantity > 0) {
      setLocalQuantity(prev => prev - 1);
    }
  };

  const handleUpdateCart = async () => {
    if (!session || !cartId) {
      console.log("Missing session or cartId:", { session: !!session, cartId });
      return;
    }
    
    setIsUpdating(true);
    try {
      console.log("Updating cart:", { localQuantity, qtyInCart, productId: product.id, cartId });
      
      if (localQuantity === 0 && qtyInCart > 0) {
        // Remove item from cart completely
        console.log("Removing item from cart");
        const res = await removeCartItem({
          variables: {
            cartId: cartId,
            itemId: product.id,
          },
        });
        
        console.log("Remove response:", res.data);
        if (res.data && res.data.RemoveCartItem) {
          client.writeQuery({
            query: GET_CART_BY_EMAIL,
            variables: { email: session.user.email },
            data: { getCartByEmail: res.data.RemoveCartItem },
          });
        }
      } else if (qtyInCart === 0 && localQuantity > 0) {
        // Add new item to cart
        console.log("Adding new item to cart");
        const res = await addCartItem({
          variables: {
            itemId: product.id,
            cartId: cartId,
            quantity: localQuantity,
          },
        });
        
        console.log("Add response:", res.data);
        if (res.data && res.data.addCartItem) {
          client.writeQuery({
            query: GET_CART_BY_EMAIL,
            variables: { email: session.user.email },
            data: { getCartByEmail: res.data.addCartItem },
          });
        }
      } else if (localQuantity > 0 && qtyInCart > 0) {
        // Update existing item quantity
        console.log("Updating existing item quantity");
        const res = await updateCartItem({
          variables: {
            itemId: product.id,
            cartId: cartId,
            quantity: localQuantity,
          },
        });
        
        console.log("Update response:", res.data);
        if (res.data && res.data.updateCartItem) {
          client.writeQuery({
            query: GET_CART_BY_EMAIL,
            variables: { email: session.user.email },
            data: { getCartByEmail: res.data.updateCartItem },
          });
        }
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      // Reset local quantity on error
      setLocalQuantity(qtyInCart);
    } finally {
      setIsUpdating(false);
    }
  };

  const hasChanges = localQuantity !== qtyInCart;

  return (
    <div className="border-t border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-gray-900">
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            <span className="text-lg text-gray-500 line-through">
              {(product.price * 1.2).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <div
              className={`w-2 h-2 rounded-full ${
                product.stock > 10 ? "bg-green-500" : "bg-orange-500"
              }`}
            ></div>
            <span className="text-sm text-gray-600">
              {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
            </span>
          </div>
        </div>

        <div className="text-right">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            20% OFF
          </span>
        </div>
      </div>

      {/* Show changes indicator */}
      {hasChanges && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-blue-800">
              Quantity changed from {qtyInCart} to {localQuantity}. Click "Update Cart" to save changes.
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center space-x-4">
        {/* Quantity Selector */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={handleLocalDecrement}
            disabled={localQuantity <= 0}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <div className="px-4 py-2 bg-white min-w-[3rem] text-center font-medium">
            {localQuantity}
          </div>
          <button
            onClick={handleLocalIncrement}
            disabled={localQuantity >= product.stock}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>

        {/* Update Cart Button */}
        <button
          onClick={handleUpdateCart}
          disabled={product.stock <= 0 || isUpdating || !hasChanges}
          className={`flex-1 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl ${
            hasChanges
              ? "bg-green-600 hover:bg-green-700 text-white"
              : localQuantity > 0
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          } disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          {isUpdating ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Updating...</span>
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8"
                />
              </svg>
              <span>
                {hasChanges
                  ? qtyInCart === 0 && localQuantity > 0
                    ? "Add to Cart"
                    : "Update Cart"
                  : localQuantity > 0
                  ? "In Cart"
                  : "Add to Cart"}
              </span>
            </>
          )}
        </button>
      </div>

      {/* Reset button when there are changes */}
      {hasChanges && (
        <div className="mt-3">
          <button
            onClick={() => setLocalQuantity(qtyInCart)}
            className="w-full text-sm text-gray-600 hover:text-gray-800 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Reset to Cart Quantity ({qtyInCart})
          </button>
        </div>
      )}

      {/* Additional Actions */}
      <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-100">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors duration-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="text-sm">Add to Wishlist</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
            />
          </svg>
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default RightContainer;
