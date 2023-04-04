import { Link, Outlet, useParams } from 'react-router-dom';

const DogsDetails = () => {
  const { dogId } = useParams();

  //   useEffect(() => {
  // HTTP Запрос если нужно
  //   }, [dogId]);
  return (
    <>
      <h1>DogsDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
        <li>
          <Link to="subbreeds">Породы</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default DogsDetails;
