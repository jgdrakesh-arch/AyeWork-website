import './globals.css';

export const metadata = {
  title: 'AyeWork | Volunteer Management & Engagement',
  description:
    'Modern volunteer management for schools, students, and community organizations. AyeWork helps replace manual paper-based workflows with smarter digital engagement.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
