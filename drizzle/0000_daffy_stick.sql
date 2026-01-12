CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"tagline" text,
	"description" text,
	"website_url" varchar(255),
	"tags" json,
	"vote_count" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"approved_at" timestamp,
	"status" varchar(50) DEFAULT 'pending',
	"submitted_by" varchar(255),
	"user_id" varchar(255),
	"organization_id" varchar(255)
);
--> statement-breakpoint
CREATE UNIQUE INDEX "products_slug_idx" ON "products" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "products_organization_idx" ON "products" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "products_status_idx" ON "products" USING btree ("status");