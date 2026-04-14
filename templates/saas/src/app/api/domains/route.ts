import { NextRequest, NextResponse } from "next/server"
import { addDomain, listDomains } from "@/db/queries"

export async function GET() {
  const result = await listDomains()
  return NextResponse.json(result)
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      domain?: string
      isPrimary?: boolean
      redirectToPrimary?: boolean
    }

    const result = await addDomain({
      domain: body.domain ?? "",
      isPrimary: body.isPrimary,
      redirectToPrimary: body.redirectToPrimary,
    })

    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to add domain"
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

export const runtime = "nodejs"
