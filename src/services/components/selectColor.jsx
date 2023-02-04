import { useDispatch, useSelector } from 'react-redux';
import { setColors } from '../../store/stateSlice';

const SelectColor = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.reducer.product);
  const colors = useSelector((state) => state.reducer.colors);
  return (
    <select
      className="form-select my-select my-2"
      aria-label="Default select example"
      value={colors}
      onChange={(e) => dispatch(setColors(e.target.value))}
    >
      {product.colors.map((color) => {
        return (
          <option key={`${color.name}_${color.id}`} value={color.id}>
            {color.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectColor;
