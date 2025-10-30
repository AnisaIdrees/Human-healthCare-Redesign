import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body: { name: string; lastName:string ;email: string; message: string } = await req.json();
    console.log('Contact Form:', body);

    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch {
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
