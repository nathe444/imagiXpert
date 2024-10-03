import { connectToDatabase } from "@/lib/database/mongoose";
import { NextResponse } from "next/server";
// import { createUser } from "@/lib/actions/user.action";

export async function GET() {
  try {
    await connectToDatabase();
    // // Example user data
    // const newUser = {
    //   clerkId: "clerk_1234567890", // This should be replaced with the actual Clerk ID
    //   email: "johndoe@example.com",
    //   username: "johndoe",
    //   firstName: "John",
    //   lastName: "Doe",
    //   photo: "https://example.com/photo.jpg",
    // };

    // // Create a new user
    // const createdUser = await createUser(newUser);

    return NextResponse.json({
      message: "MongoDB connected ",
      // user: createdUser,
    });
  } catch (error) {
    console.error("MongoDB connection or user creation error:", error);
    return NextResponse.json({
      message: "MongoDB connection or user creation failed",
      error,
    });
  }
}
