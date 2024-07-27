import "./globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Add custom head elements here */}</head>
      <body>{children}</body>
    </html>
  );
}