import ProductCard from "../ui/product-card";

export const metadata = {
  title: 'Cars Home',
}

export default function Page() {
  return (
    <div>
      <h1>View All Cars Home Page</h1>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}
