import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
/**styles */
// import "./styles/main.css";
export default function ProductTable({ products, inStockOnly, searchTerm }) {

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {

    /** Filtrer les produits avant l'affichage */
    if(product.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return ;
    }
    if(inStockOnly && !product.stocked) {
      return;
    }
    /** Inserer les categories et les produits */
    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
      
    }
    rows.push(
      <ProductRow 
        key={product.name}
        product={product}
      />
    );
    lastCategory = product.category;

    // console.log(rows);
  });


  return <>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  </>
 
}