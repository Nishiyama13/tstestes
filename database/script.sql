CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"email" VARCHAR(40) NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL
);
