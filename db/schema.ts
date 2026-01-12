import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  json,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";

export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    tagline: text("tagline"),
    description: text("description"),
    websiteUrl: varchar("website_url", { length: 255 }),
    tags: json("tags"),
    voteCount: integer("vote_count").default(0),
    createdAt: timestamp("created_at").defaultNow(),
    approvedAt: timestamp("approved_at"),
    status: varchar("status", { length: 50 }).default("pending"),
    submittedBy: varchar("submitted_by", { length: 255 }),
    userId: varchar("user_id", { length: 255 }),
    organaizationId: varchar("organization_id", { length: 255 }),
  },
  (table) => ({
    slugUnique: uniqueIndex("products_slug_idx").on(table.slug),
    orgIndex: index("products_organization_idx").on(table.organaizationId),
    statusIndex: index("products_status_idx").on(table.status),
  })
);
