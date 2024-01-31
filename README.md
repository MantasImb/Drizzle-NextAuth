# Drizzle-NextAuth

Trying out Drizzle and NextAuth.js to test general next.js integration.

### Set-up:

- A separate .env file is required for the database connection (Drizzle-kit doesn't read from .env.local)

### COMMANDS:

- `pnpm dbgenerate` Generates drizzle schema
- `pnpm dbpush` Pushes generated schema to the db

### REFERENCES:

- https://orm.drizzle.team/docs/
- https://authjs.dev/getting-started/providers/oauth-tutorial
- https://www.youtube.com/watch?v=-JnEuvPmt-Q
- https://authjs.dev/reference/adapter/drizzle
