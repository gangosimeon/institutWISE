

export default function SearchBar({searchTerm, inStockOnly, setSearchTermChange, setInStockOnlyChange}) {
  return <>
    <div className="search-bar-container">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTermChange(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="search-bar">
        <input 
          type="checkbox" 
          name="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnlyChange(e.target.checked)}
        />
        <label htmlFor="checkbox" >Only show products in stock</label>
      </div>
    </div>
  </>
}