const BASE_URL = "https://dev.codeleap.co.uk/careers/";

export async function GET() {
  const response = await fetch(BASE_URL);

  const data = await response.json();

  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return Response.json(data);
}
