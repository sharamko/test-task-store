import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProducts } from '../api';

const ProductsList = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);
  return products ? (
    <div className="px-2 py-4 flex-fill">
      <h2 className="text-center">Список товарів</h2>
      <div className="d-flex flex-wrap">
        {products.map((product) => {
          return (
            <div
              key={`${product.name}_${product.id}`}
              className="card m-2"
              style={{ width: 150 }}
            >
              <img
                src={product.colors[0].images[0]}
                className="card-img-top"
                alt={`Зображення ${product.name}`}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Опис товару</p>

                <Link className="btn btn-primary" to={`/${product.id}`}>
                  Детальніше
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div
      className="spinner-border text-primary position-absolute top-50 start-50"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default ProductsList;
