import { compare, hash } from "bcryptjs";

// Hashing password with Bcrypt.js
export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

// Comparing password with Bcrypt.js
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
