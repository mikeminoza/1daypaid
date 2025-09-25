import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  try {
    revalidateTag("prismic");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ revalidated: false, error: err });
  }
}
