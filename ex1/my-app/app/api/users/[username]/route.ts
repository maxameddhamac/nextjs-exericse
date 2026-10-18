export async function GET(
  _request: Request,
  { params }: RouteContext<"/api/users/[username]">,
) {
  const { username } = await params;

  return Response.json({ username });
}
