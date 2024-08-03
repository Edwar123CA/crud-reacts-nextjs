import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        taskName: {
            type: String,
            required: [true, "Please complete the field."]
        },
        taskDescription: {
            type: String,
            required: [true, "Please complete the description."]
        },
        taskQuantity: {
            type: Number,
            required: [true, "Please complete the quantity."]
        },
        dueDate: {
            type: Date,
            required: [true, "Please provide a due date."]
        },
        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],  // Opciones de prioridad
            default: "Medium"
        },
        status: {
            type: String,
            enum: ["Pending", "In Progress", "Completed"],  // Opciones de estado
            default: "Pending"
        },
        assignedTo: {
            type: String,
            required: false // Este campo puede ser opcional
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const TaskModel = mongoose?.models?.Task || mongoose.model("Task", taskSchema);
