import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const folder = `products/${session.user.id}`;

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder,
      use_filename: "true", // обязательно включи, если используешь
    },
    process.env.CLOUDINARY_API_SECRET!
  );

  console.log("🧾 Params to sign:", { timestamp, folder, use_filename: "true" });
  console.log("✅ Signature:", signature);

  return NextResponse.json({
    timestamp,
    signature,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    folder,
    use_filename: "true",
  });
}
