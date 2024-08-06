import SideNav from "../ui/side-nav"

export default function CarsSectionLayout({children}) {
  return (
    <div>
      <SideNav />
      {children}
    </div>
  )
}
