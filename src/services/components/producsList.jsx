import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProducts } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/stateSlice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.reducer.products);
  useEffect(() => {
    getProducts().then((products) => dispatch(setProducts(products)));
  }, []);
  return products ? (
    <div className="px-2 py-4 flex-fill">
      <h2 className="text-center">Список товарів</h2>
      <div className="d-flex flex-wrap">
        {products.map((product) => {
          return (
            <Link className="linkList" to={`/${product.id}`}>
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

                  <button className="btn btn-primary">Детальніше</button>
                </div>
              </div>
            </Link>
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
