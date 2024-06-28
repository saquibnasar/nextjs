export async function GET(request) {
  const users = [{ id: 1, name: "john" }];
  return new Response(JSON.stringify(users));
}
