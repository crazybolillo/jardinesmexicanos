export default function MdxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full mx-auto mt-2 mb-6 prose prose-headings:pt-4 lg:prose-xl dark:prose-invert">
      {children}
    </main>
  );
}
