import React,{useState,useRef, useEffect} from 'react'
import { FiSearch } from "react-icons/fi";;
import { Link } from 'react-router-dom';
 import { items } from "../Data/ProductData";
 import "./Search.css";

function Search() {
  const [searchName, setSearchName] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const filteredProducts = items.filter((product) =>
    product.name.toLowerCase().includes(searchName.toLowerCase())
  );
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        showResults
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showResults]);

  return ( <div className='p-4 text-base   justify-center  hidden w-2/5 sm:block justify-center' ref={searchRef}>
                  <form  action='search'>
                  <div className='search-box block'>

                    <input
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                      className='text-sm'
                      type='text'
                      
                      placeholder='SEARCH PRODUCTS'
                    
                      name=''
                      id=''
                      onFocus={() => setShowResults(true)}
                    />
                      {showResults && searchName && (
                      <ul className='  search-item block font-blink bg-white '>
                        {filteredProducts.map((value) => (
                          <Link
                            onClick={() => setShowResults(false)}
                            to={`/product/${value.id}`}
                            key={value.name}>
                            <li>{value.name}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                      </div>
                  </form>
                
                </div>
  )
}

export default Search