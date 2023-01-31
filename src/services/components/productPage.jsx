import { useParams } from 'react-router-dom';
import { getProduct, getSizes } from '../api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Error from './error';
import MySwiper from './mySwiper';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [productError, setProductError] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState('');
  const [colors, setColors] = useState(1);

  useEffect(() => {
    getProduct(productId)
      .then((data) => setProduct(data))
      .catch((e) => setProductError(e.message));
  }, [productId]);
  useEffect(() => {
    getSizes().then((data) => setSizes(data));
  }, []);

  return productError ? (
    <Error errorMessage={productError} />
  ) : product ? (
    <div className="px-2 py-4 flex-fill">
      <h2 className="text-center">{`${product.name} ${
        product.colors[colors - 1].name
      }`}</h2>
      <div className="d-flex flex-wrap justify-content-around">
        <div className="product-left">
          <MySwiper product={product} colors={colors} />
          <div>
            <p className="my-2">
              <strong>{product.colors[colors - 1].description}</strong> Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="product-right">
          <h6 className="mt-4">Виберіть колір із доступних:</h6>
          <select
            className="form-select my-select my-2"
            aria-label="Default select example"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
          >
            {product.colors.map((color) => {
              return (
                <option key={`${color.name}_${color.id}`} value={color.id}>
                  {color.name}
                </option>
              );
            })}
          </select>
          <h6 className="mt-4">Виберіть розмір із доступних:</h6>
          <select
            className="form-select my-select my-2"
            aria-label="Default select example"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            {product.colors[colors - 1].sizes.length !== 0 ? (
              sizes.map((size) =>
                product.colors[colors - 1].sizes.includes(size.id) ? (
                  <option key={`${size.label}_${size.id}`} value={size.id}>
                    {size.label}
                  </option>
                ) : null
              )
            ) : (
              <option>Немає розмірів</option>
            )}
          </select>
          <p className="my-4">Ціна: {product.colors[colors - 1].price}</p>
          <button
            disabled={product.colors[colors - 1].sizes.length === 0}
            className="btn btn-primary"
          >
            Купити
          </button>
          <Link className="navbar-brand" to="/">
            <button className="btn btn-secondary d-block my-5">
              Список товарів
            </button>
          </Link>
        </div>
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

export default ProductPage;
