import NextAuth, { type Session } from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/connect";
import { type AdapterUser } from "@auth/core/adapters";

export const { handlers, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
  // Adding a callback to the session function to extend the returned session object with an user.id
  session: { strategy: "database" },
  callbacks: {
    async session({ session, user }: { session: Session; user?: AdapterUser }) {
      if (user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
