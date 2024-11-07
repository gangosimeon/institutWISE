export default function ProductRow({ product }) {
  let name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>; if (product.stocked === false);
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}