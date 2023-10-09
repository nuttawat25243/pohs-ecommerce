import React,{useState,useRef,useEffect} from 'react'
import { items } from '../Data/ProductData';
import { Link } from 'react-router-dom';


function NavSearchbutton() {
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
  return (
    
       <nav ref={searchRef} className='bg-white  sm:p-2  w-full h-screen items-center absolute shadow '>
               <form  action='search' className='w-3/5 m-auto  border-b-2 border-black  '>
                  <div className='w-full'>

                    <input
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                      className='text-sm w-full p-1'
                      type='text'
                      
                      placeholder='SEARCH PRODUCTS'
                    
                      name=''
                      id=''
                      onFocus={() => setShowResults(true)}
                    />
                      {showResults && searchName && (
                      <ul className='  block font-blink bg-white  '>
                        {filteredProducts.map((value) => (
                          <Link
                            onClick={() => setShowResults(false)}
                            to={`/product/${value.id}`}
                            key={value.name}>
                            <li className='hover:bg-gray-200'>{value.name}</li>
                          </Link>
                        ))}
                      </ul>
                    )}
                      </div>
                  </form>
       </nav>

  )
}

export default NavSearchbutton