import { NextRequest, NextResponse } from "next/server"
import { plans } from "@/lib/saas"

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as { planId?: string }
  const plan = plans.find((item) => item.id === body.planId)

  if (!plan) {
    return NextResponse.json({ error: "Unknown plan" }, { status: 400 })
  }

  const checkoutBaseUrl = process.env.CHECKOUT_BASE_URL

  if (!checkoutBaseUrl) {
    return NextResponse.json(
      {
        error: "Checkout provider is not configured",
        nextStep:
          "Set CHECKOUT_BASE_URL or replace this route with Stripe Checkout, LemonSqueezy, or your billing provider.",
      },
      { status: 400 },
    )
  }

  const checkoutUrl = new URL(checkoutBaseUrl)
  checkoutUrl.searchParams.set("plan", plan.id)

  return NextResponse.json({
    checkoutUrl: checkoutUrl.toString(),
  })
}
