export const metadata = {
  title: 'IdeaForge',
  description: 'From idea to reality — structured, honest, secure.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: '#fafafa',
          color: '#111',
        }}
      >
        {children}
      </body>
    </html>
  );
}
