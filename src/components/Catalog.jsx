import { Link } from "react-router-dom";

const Catalog = () => {
  const products = [
    { id: 1, title: "Torta de Chocolate", price: 20, stock: 10 },
    { id: 2, title: "Torta de Vainilla", price: 18, stock: 5 },
    // Más productos
  ];

  return (
    <div className="catalog">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h2>{product.title}</h2>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <Link to={`/product/${product.id}`}>Ver Detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
