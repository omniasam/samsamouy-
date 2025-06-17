import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db("samsamouy");
  const plans = await db.collection("plans").find().toArray();

  return NextResponse.json(plans);
}
