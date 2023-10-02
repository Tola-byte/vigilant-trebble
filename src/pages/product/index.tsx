import { Advantages } from "../../components/advantages";
import { ProductBanner } from "../../components/product-banner";

function Product() {
  return (
    <div className="flex flex-col gap-y-16">
      <ProductBanner />
      <Advantages />
    </div>
  );
}

export default Product;
