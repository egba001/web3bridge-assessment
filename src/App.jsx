import Nav from "./components/Nav"
import ProductCard from "./components/ProductCard"
import { products } from "./data/products"

function App() {

  console.log(products);

  return (
      <>
          <Nav />
          <div className="flex py-24 items-center container mx-auto px-14 justify-center gap-6">
              {products.map((product, id) => (
                  <ProductCard
                      key={id}
                      title={product.productName}
                      price={product.productPrice}
                      image={product.productImage}
                  />
              ))}
          </div>
      </>
  );
}

export default App
