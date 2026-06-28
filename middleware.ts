import { NextRequest, NextResponse } from "next/server";

const USERNAME = "missiona";
const PASSWORD = "kadai";

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (authHeader?.startsWith("Basic ")) {
    const encoded = authHeader.split(" ")[1];
    const decoded = atob(encoded);
    const [username, password] = decoded.split(":");

    if (username === USERNAME && password === PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="L Message Proposal"'
    }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt).*)"]
};
