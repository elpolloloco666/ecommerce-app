import ProductCarousel from '../components/ProductCarousel';
import ProductExplorer from '../components/ProductExplorer';

const getCarouselProducts = async() => {
  const res = await fetch('https://ecommerce-api-k3g5.onrender.com/api/v1/products/featured');
  return res.json();
}

export default async function Home() {

  const carouselProducts = await getCarouselProducts();

  return (
    <main className="my-10 space-y-10">
      <ProductCarousel products={carouselProducts}/>
      <ProductExplorer/>
    </main>
  )
}
