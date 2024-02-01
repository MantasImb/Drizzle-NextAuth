# Drizzle-NextAuth

Trying out Drizzle and NextAuth.js to test general next.js integration.

### Set-up:

- Start by setting up a database by following the instructions in the Drizzle docs:
- - https://orm.drizzle.team/docs/
- Add NextAuth to the project:
- - https://authjs.dev/getting-started/
- - https://authjs.dev/reference/adapter/drizzle
- Set up the wanted providers. In this case, GitHub was used. Every provider is different, so make sure to read the docs for the provider you want to use.
- A separate .env file is required for the database connection (Drizzle-kit doesn't read from .env.local)
- Run `pnpm dbgenerate` to generate the schema
- Run `pnpm dbpush` to push the schema to the database
- For the "session" to include the userId, create the @/types/next-auth.d.ts file. This is required for the session to include the userId.
- - https://authjs.dev/getting-started/typescript
- A callback to the session is then added in the @/app/auth.ts file to include the userId in the session.
- Database actions are added in the @/db/actions.ts file, which are then used in the Counter component (@/app/components/counter.tsx).

### COMMANDS:

- `pnpm dbgenerate` Generates drizzle schema
- `pnpm dbpush` Pushes generated schema to the db

### Files of interest:

- @/drizzle.config.ts
- @/.env.example
- @/types/next-auth.d.ts
- @/db
- @/app/api/auth/[...nextauth]/route.ts

### REFERENCES:

- https://orm.drizzle.team/docs/
- https://authjs.dev/getting-started/providers/oauth-tutorial
- https://www.youtube.com/watch?v=-JnEuvPmt-Q
- https://authjs.dev/reference/adapter/drizzle
