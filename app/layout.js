import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from './bootstrapClient';

export const metadata = {
  title: 'Proyectos DPS',
  description: 'Proyecto Next.js con App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
