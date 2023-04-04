import { useRef, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const DogsDetails = () => {
  const location = useLocation();
  const beckLinkLjcationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();

  //   useEffect(() => {
  // HTTP Запрос если нужно
  //   }, [dogId]);
  return (
    <>
      <h1>DogsDetails: {dogId}</h1>
      <Link to={beckLinkLjcationRef.current}>Назад к странице коллекции</Link>
      <ul>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
        <li>
          <Link to="subbreeds">Породы</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DogsDetails;
