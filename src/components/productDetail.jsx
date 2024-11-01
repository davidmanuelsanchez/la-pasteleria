import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Aquí se debería hacer la llamada a la API para obtener el producto por ID
    setProduct({
      id: productId,
      title: "Torta de Chocolate",
      price: 20,
      stock: 10,
      description: "Deliciosa torta de chocolate",
    });
  }, [productId]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>{product.description}</p>
    </div>
  );
};

ProductDetail.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductDetail;
