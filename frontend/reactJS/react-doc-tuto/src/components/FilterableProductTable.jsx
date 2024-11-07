import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from 'react';
/** Styles */
import "./styles/main.css";

export default function FilterableProductTable({products}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);


  return <>
      <SearchBar  
        searchTerm={searchTerm}
        inStockOnly={inStockOnly}
        setSearchTermChange={setSearchTerm}
        setInStockOnlyChange={setInStockOnly}
      />
      <ProductTable 
        products={products} 
        inStockOnly={inStockOnly}
        searchTerm={searchTerm}
      />
    </>
  

}