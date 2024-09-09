import { connectToDB } from "@/utils/database";
import Secret from "@/models/secret";

export const POST = async (req) => {
  const { userId, secret, tag } = await req.json();

  try {
    await connectToDB();
    const newSecret = new Secret({ creator: userId, secret, tag });
    await newSecret.save();
    return new Response(JSON.stringify(newSecret), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new secret", { status: 500 });
  }
};
