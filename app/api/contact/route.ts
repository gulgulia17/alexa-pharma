import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log("Contact form submission:", data)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Error handling contact form:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
