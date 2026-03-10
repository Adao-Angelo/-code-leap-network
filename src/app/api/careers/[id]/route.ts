const BASE_URL = 'https://dev.codeleap.co.uk/careers/';

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const response = await fetch(`${BASE_URL}${params.id}/`);
  const data = await response.json();

  return Response.json(data);
}

export async function PATCH(req: Request, { params }: Params) {
  const body = await req.json();

  const response = await fetch(`${BASE_URL}${params.id}/`, {
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
  await fetch(`${BASE_URL}${params.id}/`, {
    method: 'DELETE',
  });

  return Response.json({ success: true });
}
