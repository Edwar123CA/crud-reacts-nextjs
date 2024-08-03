import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { TaskModel } from "@/models/Task";  // Cambiar StudentModel por TaskModel

// Crear un nuevo documento
export const POST = async (req) => {
    await connectDB();
    try {
        const body = await req.json();
        console.log("Received body:", body);
        const newTask = await TaskModel.create(body);
        return NextResponse.json({ data: newTask }, { status: 201 });
    } catch (error) {
        console.error("Error creating task:", error);
        return NextResponse.json({ data: null, error: error.message || "Internal Server Error" }, { status: 500 });
    }
};

// Obtener todos los documentos
export const GET = async () => {
    await connectDB();
    try {
        const result = await TaskModel.find({});
        return NextResponse.json({ data: result }, { status: 200 });
    } catch (error) {
        console.error("Error fetching tasks:", error); // Agrega logging para depuración
        return NextResponse.json({ data: null, error: error.message || "Internal Server Error" }, { status: 500 });
    }
};
