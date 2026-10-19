import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Please provide a valid phone number")
    .max(30),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email")
    .max(160)
    .optional()
    .or(z.literal("")),
  service: z.string().trim().max(160).optional(),
  message: z
    .string()
    .trim()
    .min(5, "Tell us a bit about the project")
    .max(4000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]?.message ?? "Please review the form fields",
        },
        { status: 422 }
      );
    }

    const { name, phone, email, service, message } = parsed.data;

    const enquiry = await db.enquiry.create({
      data: {
        name,
        phone,
        email: email && email.length > 0 ? email : null,
        service: service && service.length > 0 ? service : null,
        message,
      },
    });

    return NextResponse.json({ ok: true, id: enquiry.id }, { status: 201 });
  } catch (error) {
    console.error("[ENQUIRY_POST]", error);
    return NextResponse.json(
      { error: "Something went wrong — please call us instead" },
      { status: 500 }
    );
  }
}
