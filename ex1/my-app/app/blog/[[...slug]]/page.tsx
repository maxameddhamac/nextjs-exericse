export default async function BlogPage({
  params,
}: PageProps<"/blog/[[...slug]]">) {
  const { slug } = await params;
  const path = slug?.join("/") ?? "";

  return <h1>You visited: /{path}</h1>;
}
