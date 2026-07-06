import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const report = await request.json()
  // In production you'd send this to a logging service
  console.log('[CSP Violation]', JSON.stringify(report, null, 2))
  return NextResponse.json({}, { status: 204 })
}