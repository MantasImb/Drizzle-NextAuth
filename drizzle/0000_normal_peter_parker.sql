CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"image_url" varchar(255),
	"email" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"click_count" integer DEFAULT 0,
	"last_click_at" timestamp,
	CONSTRAINT "email" UNIQUE("email")
);
