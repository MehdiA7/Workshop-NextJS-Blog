import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// format de rule for the body request
const createPublicationSchema = z.object({
    title: z.string().min(1).max(50),
    description: z.string().min(1)
});

const createLikeSchema = z.object({
    id: z.number(),
    liked: z.boolean()
});

const createDeleteSchema = z.object({
    id: z.number()
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

export async function PATCH(request: NextRequest) {
    const body = await request.json();

    const validation = createLikeSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors, { status: 400});
    }

    try {
        const publication = await prisma.publication.findUnique({
            where: { id: body.id }
        });

        if (!publication) {
            return NextResponse.json({ error: "Publication not found" }, { status: 404 });
        }

        const updatedPublication = await prisma.publication.update({
            where: { id: body.id },
            data: { 
                like: body.liked 
                    ? { increment: 1 }  
                    : { decrement: 1 }  
            }
        });

        return NextResponse.json(updatedPublication, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `Failed to update like : ${error}` }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    const body = await request.json();

    const validation = createDeleteSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors, { status: 400 });
    };

    try {
        const publication = await prisma.publication.findUnique({
            where: { id: body.id }
        });

        if(!publication) {
            return NextResponse.json({ error: "Publication not found" }, { status: 404 });
        };

        await prisma.publication.delete({
            where: { id: body.id }
        });
        return NextResponse.json({ message: "Delete success" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `Failed to delete publication : ${error}` }, { status: 500 });
    };
}
