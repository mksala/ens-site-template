export const metadata = {
  title: 'ENS Site',
  description: 'A resilient site served from IPFS, linked via ENS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
