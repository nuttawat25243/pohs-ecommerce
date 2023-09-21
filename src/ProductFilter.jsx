import Nav from './components/Nav/Nav'
import ProductHome from './Productcomponents/ProductHome'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Link } from 'react-router-dom'

  
function ProductFilter() {
  return (
  
    <div>
      <Nav />
     <ProductHome/>
    </div>
  )
}

export default ProductFilter
