import Secret from "@/models/secret";
import { connectToDB } from "@/utils/database";

export const GET = async (req, { params }) => {
    
    try {
        await connectToDB()

        const secret = await Secret.find({ creator: params.id }).populate("creator")
        return new Response(JSON.stringify(secret), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch secrets created by user", { status: 500 })
    }
}