const Card = ({ pro }) => {
  return (
    <div>
      <h1>{pro.title}</h1>
      <p>{pro.desc}</p>
      <p>{pro.price}</p>
      <p>{pro.rate}</p>
    </div>
  );
};

export default Card;
