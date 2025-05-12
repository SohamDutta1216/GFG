import './globals.css';
import { ThemeProvider } from "./components/ThemeContext";

export const metadata = {
  title: 'Good Friends Gallery',
  description: 'A modern gallery website for artists and creators',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
