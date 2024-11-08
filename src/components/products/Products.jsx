import Card from "./Card";

const Products = ({ product }) => {
  return (
    <div>
      {product.map((pro, i) => {
        return <Card key={i} pro={pro} />;
      })}
    </div>
  );
};

export default Products;
