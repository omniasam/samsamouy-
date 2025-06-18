import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, password } = await req.json();

  if (name === "admin" && password === "1234") {
    const response = NextResponse.json({ success: true });

    response.headers.append("Set-Cookie", `token=dummy; Path=/; HttpOnly; SameSite=Lax`);
    response.headers.append("Set-Cookie", `role=admin; Path=/; HttpOnly; SameSite=Lax`);

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
