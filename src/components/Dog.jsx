export const Dog = ({ dog: { url, breeds } }) => {
  const { name, bred_for, temperament } = breeds[0];
  return (
    <div>
      <p>Dog card</p>
      <img src={url} alt="dog" width={360} />
      <div>
        <p>Name: {name} </p>
        <p>Bred for: {bred_for} </p>
        <p>Temperament: {temperament} </p>
      </div>
    </div>
  );
};
