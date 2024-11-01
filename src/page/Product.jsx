import { useParams } from "react-router-dom";
import ProductDetail from "../components/productDetail";

const Product = () => {
  const { id } = useParams();

  return <ProductDetail productId={id} />;
};

export default Product;
