"use server";

import { revalidatePath } from "next/cache";
import { db } from "./connect";
import { users } from "./schema";

import { auth } from "@/app/auth";
import { eq } from "drizzle-orm";

export async function getCountAndDate() {
  const session = await auth();
  if (!session) return { error: "Not logged in" };

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, session.user.id),
  });
  if (!user) return { error: "User not found" };

  return { count: user.click_count, date: user.last_click_at };
}

export async function incrementCounter() {
  const session = await auth();
  if (!session) return;

  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, session.user.id),
  });
  if (!user) return;

  const last_click_at = new Date();

  await db
    .update(users)
    .set({ click_count: user.click_count + 1, last_click_at })
    .where(eq(users.id, session.user.id));

  revalidatePath("/");
}
