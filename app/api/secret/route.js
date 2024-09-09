import Secret from "@/models/secret";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
    
    try {
        await connectToDB()

        const secret = await Secret.find().lean()
        return new Response(JSON.stringify(secret), { status: 200 })
    } catch (error) {
        return new Response("Failed to get secrets", { status: 500 })
    }
}