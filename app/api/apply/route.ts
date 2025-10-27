import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newApplication = await db.jobApplication.create({
      data: {
        jobId: body.jobId,
        jobTitle: body.jobTitle,
        company: body.company,
        name: body.name,
        email: body.email,
        phone: body.phone,
        experience: body.experience,
        coverLetter: body.coverLetter,
        resumeUrl: body.resumeUrl || null,
      },
    });

    return NextResponse.json({ success: true, application: newApplication });
  } catch (error: any) {
    console.error("Error saving application:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
