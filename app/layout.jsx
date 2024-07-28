import "./globals.css";
import React from 'react';
// import LogoutButton from './components/LogoutButton';
import { Nav } from '_components'; // Import Nav component

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head className="bg-white">{/* Add custom head elements here */}</head>
      <body>
        <div>
          <header>
            <nav>
            <Nav />
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            {/* Footer content */}
          </footer>
        </div>
      </body>
    </html>
  );
}