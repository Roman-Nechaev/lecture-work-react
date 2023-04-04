import { useParams } from 'react-router-dom';

const Gallery = () => {
  const params = useParams();

  //   useEffect(() => {
  // HTTP Запрос если нужно
  //   }, [params.dogId]);

  return <div>Image Gallery: {params.dogId}</div>;
};

export default Gallery;
