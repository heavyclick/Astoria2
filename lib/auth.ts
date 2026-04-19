import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const COOKIE_NAME = "astoria_admin_token";
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "dev-secret-change-in-production";

export function signAdminToken(): string {
  return jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "7d" });
}

export async function verifyAdminToken(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return false;
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export { COOKIE_NAME };
