import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z.email("Please enter a valid email address"),

    phone: z.string().min(1, "Phone number is required"),

    company: z.string().optional(),

    category: z.string().min(1, "Please select a category"),

    message: z.string().min(10, "Message must be at least 10 characters"),

    imageFile: z.any().optional(),

    pdfFile: z.any().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;