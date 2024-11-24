import { z } from "zod";

export const createCarSchema = z.object({
    title: z.string(),
    description: z.string(),
    author_name: z.string(),
    author_email: z.string().email(),
    price_from: z.string(),
    price_to: z.string(),
    negotiable: z.string().optional(),      
    img: z.instanceof(File).refine(file => file.size !== 0 && file.name !== undefined).refine(file => ['image/jpg', 'image/jpeg'].includes(file.type)).refine(file => file.size <= 5000000)
})