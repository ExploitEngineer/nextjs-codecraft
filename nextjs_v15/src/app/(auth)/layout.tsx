export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Auth layouts</h2>
      {children}
    </>
  );
}
