import { Link } from 'react-router-dom';

const Error = ({ errorMessage }) => {
  return (
    <div className="text-center fs-2">
      <p>{errorMessage}</p>
      <Link to="/">До списку товарів</Link>
    </div>
  );
};

export default Error;
