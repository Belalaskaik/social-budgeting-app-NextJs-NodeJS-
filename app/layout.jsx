import './globals.css';

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <nav></nav>
    
      {children}
    </section>
  )
}