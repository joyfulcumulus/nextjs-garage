import ProductCard from "@/app/ui/product-card"

export async function generateMetadata({ params }) {
  const id = params.id
  return {
    title: `Car ID: ${id}`,
  }
}

export default function Page() {
  return (
    <div>
      <h1>View Car Info page</h1>
      <ProductCard />
    </div>
  )
}
