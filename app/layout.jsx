import "./globals.css";
import React from 'react';
// import LogoutButton from './components/LogoutButton';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head className="bg-white">{/* Add custom head elements here */}</head>
      <body>
        <div>
          <header>
            <nav>
              {/* Other navigation items */}
              {/* <LogoutButton /> */}
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