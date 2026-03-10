const BASE_URL = 'https://dev.codeleap.co.uk/careers/';

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_: Request, { params }: Params) {
  const { id } = await params;

  const response = await fetch(`${BASE_URL}${id}/`);
  const data = await response.json();

  return Response.json(data);
}

export async function PATCH(req: Request, { params }: Params) {
  const { id } = await params;
  const body = await req.json();

  const response = await fetch(`${BASE_URL}${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return Response.json(data);
}

export async function DELETE(_: Request, { params }: Params) {
  const { id } = await params;

  await fetch(`${BASE_URL}${id}/`, {
    method: 'DELETE',
  });

  return Response.json({ success: true });
}
