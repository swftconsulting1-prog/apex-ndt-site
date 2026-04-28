export const metadata = {
  title: "Apex NDT Consulting Group",
  description: "Nadcap, Aerospace, and Level III NDT Consulting Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
