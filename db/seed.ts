import 'dotenv/config'; 
import { db } from "@/db/index";
import { products } from "@/db/schema";
import { productsSeed } from "@/db/data";

const seedProducts = async () => {
  try {
    console.log("Seeding products...");

    for (const product of productsSeed) {
      await db.insert(products).values(product).onConflictDoNothing();
    }

    console.log("Products seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding products:", err);
    process.exit(1);
  }
};

seedProducts();
