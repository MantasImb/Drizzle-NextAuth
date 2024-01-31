/*
DONT NEED THIS FILE ANYMORE
*/

// import { sql } from "@vercel/postgres";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   try {
//     const result = await sql`CREATE TABLE Users (
//         id SERIAL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL UNIQUE,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         click_count INTEGER DEFAULT 0,
//         last_click_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//        );`;
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

// import { NextResponse } from "next/server";
// import { migrate } from "drizzle-orm/vercel-postgres/migrator";
// import { db } from "@/db/connect";

// export async function GET(request: Request) {
//   try {
//     const result = await migrate(db, { migrationsFolder: "drizzle" });
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
