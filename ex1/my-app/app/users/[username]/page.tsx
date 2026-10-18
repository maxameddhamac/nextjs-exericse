export default async function UserPage({
  params,
}: PageProps<"/users/[username]">) {
  const { username } = await params;

  return <h1>Welcome, {username}</h1>;
}
