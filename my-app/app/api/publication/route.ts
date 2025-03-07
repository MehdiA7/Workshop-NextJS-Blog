import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// format de rule for the body request
const createPublicationSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().min(1)
});

// create a post function
export async function POST(request: NextRequest) {
    // get the body
    const body = await request.json();
    // verify if the body are good
    const validation = createPublicationSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }
    // send the information to the database prisma.table.action({data: {}})
    const newIssue = await prisma.publication.create({
        data: { title: body.title, description: body.description },
    });
    // send the response and status
    return NextResponse.json(newIssue, { status: 201 });
}