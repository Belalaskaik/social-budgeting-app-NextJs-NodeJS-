import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section>
          <nav></nav>
        
          {children}
        </section>
      </body>
    </html>
  )
}