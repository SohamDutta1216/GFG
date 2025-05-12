import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();
    // Only allow the fields in the schema
    const {
      name, medium, email, instagram, tiktok, website, bio, shown, native, image, notes, find, accepted
    } = data;
    const submission = await prisma.submission.create({
      data: {
        name,
        medium,
        email,
        instagram,
        tiktok,
        website,
        bio,
        shown,
        native,
        image,
        notes,
        find,
        accepted: !!accepted,
      },
    });
    return NextResponse.json({ success: true, submission });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const submissions = await prisma.submission.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json({ submissions });
  } catch (err) {
    return NextResponse.json({ submissions: [], error: err.message }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { id, accepted, native } = await req.json();
    const updated = await prisma.submission.update({
      where: { id },
      data: { accepted, ...(native !== undefined ? { native } : {}) },
    });
    return NextResponse.json({ success: true, submission: updated });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
} 