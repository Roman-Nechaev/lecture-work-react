import { useParams } from 'react-router-dom';

const SubBreeds = () => {
  const params = useParams();

  //   useEffect(() => {
  // HTTP Запрос если нужно
  //   }, []);

  return <div>Subbreeds: {params.dogId}</div>;
};

export default SubBreeds;
