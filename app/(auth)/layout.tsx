
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    < >
        <main id="authlayout" >
        {children}
        </main>
      </>
  );
}
