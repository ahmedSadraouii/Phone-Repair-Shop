import { db } from "@/db";
import { customers } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getCustomers(id: number) {
  const customer = await db
    .select()
    .from(customers)
    .where(eq(customers.id, id));

  return customer[0];
}
