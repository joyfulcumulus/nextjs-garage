import CreateForm from "@/app/ui/create-form"

export const metadata = {
  title: 'Add New Car',
}

export default function Page() {
  return (
    <div>
      <h1>Add New Car Page</h1>
      <CreateForm />
    </div>
  )
}
