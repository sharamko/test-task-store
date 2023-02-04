import { useDispatch, useSelector } from 'react-redux';
import { setSize } from '../../store/stateSlice';

const SelectSize = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.reducer.product);
  const colors = useSelector((state) => state.reducer.colors);
  const sizes = useSelector((state) => state.reducer.sizes);
  const size = useSelector((state) => state.reducer.size);
  return (
    <select
      className="form-select my-select my-2"
      aria-label="Default select example"
      value={size}
      onChange={(e) => dispatch(setSize(e.target.value))}
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
  );
};

export default SelectSize;
