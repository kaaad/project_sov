import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        if(!name) {
            return new NextResponse("No name given.", { status: 400 });
        };
        if(!email) {
            return new NextResponse("No email given.", { status: 400 });
        };
        if(!phone) {
            return new NextResponse("No phone given.", { status: 400 });
        };
        if(!message) {
            return new NextResponse("No message given.", { status: 400 });
        };

        const checkEmail = await db.contact.findFirst({
            where: {
                email,
            }
        });

        if(checkEmail) {
            return new NextResponse("Sorry, message from this email is already submitted.", { status: 400 });
        }

        const server = await db.contact.create({
            data: {
                name,
                email,
                phone,
                message
            }
        });

        return NextResponse.json(server);

    } catch (error) {
        console.log("Contact page Error", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}