import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import { LandingContent } from '@/types/translations';

const DB_NAME = 'samsamouy';
const COLLECTION = 'landingContent';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);

const content = await db
  .collection<LandingContent & { _id: string }>(COLLECTION)
  .findOne({ _id: 'homepage' });




    if (!content) {
      return NextResponse.json(
        {
          heroTitle: '',
          heroSubtitle: '',
          services: [],
          plans: [],
        },
        { status: 200 }
      );
    }

    return NextResponse.json(content, { status: 200 });
  } catch (error) {
    console.error('[GET] /landing-content error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}


export async function PUT(req: NextRequest) {
  try {
    const body: LandingContent = await req.json();

    const client = await clientPromise;
    const db = client.db(DB_NAME);

    await db.collection(COLLECTION).updateOne(
      { _id: 'homepage' },
      { $set: body },
      { upsert: true }
    );

    return NextResponse.json({ message: 'Updated successfully' });
  } catch (err) {
    console.error('[PUT] /landing-content error:', err);
    return NextResponse.json({ message: 'Update failed' }, { status: 500 });
  }
}
