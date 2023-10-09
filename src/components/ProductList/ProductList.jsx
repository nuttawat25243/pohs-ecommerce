const  ProductList = ({ img, name, price,tag}) =>{
    return (
      <>
        <section className="m-8">
        <span ><img  src={img} alt={name} className="w-48" /></span>
        <div className="">
           <h3 className="bg-gray-200 text-black text-xs w-min px-1">{tag}</h3>
          <h1 className="font-bold uppercase pt-1">{name}</h1>
        
          <section className="">
            <div className="">
              <p>฿{price} THB</p>
            </div>
            <div className="">
              </div>
          </section>
        </div>
      </section>
      </>
    );
  }

export default ProductList;