import connectDB from "@/lib/dbConnect";
import { TaskModel } from "@/models/Task";  // Cambiar StudentModel por TaskModel
import { NextResponse } from "next/server";

// Mostrar un documento
export const GET = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await TaskModel.findById(id);
    if (!result) {
      return NextResponse.json(
        { message: `Task with ID: ${id} not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

// Eliminar un documento
export const DELETE = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await TaskModel.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { message: `Task with ID: ${id} not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

// Actualizar un documento
export const PUT = async (request, { params }) => {
    await connectDB();
    const id = params.id;
    const body = await request.json();
    try {
        const result = await TaskModel.findByIdAndUpdate(id, { $set: { ...body } }, { new: true });
        if (!result) {
            return NextResponse.json(
                { message: `Task with ID: ${id} not found` },
                { status: 404 }
            );
        }
        return NextResponse.json({ data: result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ data: null }, { status: 500 });
    }
};
