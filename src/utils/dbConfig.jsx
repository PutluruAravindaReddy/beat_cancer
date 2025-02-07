import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  `postgresql://neondb_owner:npg_wQa5Md3YOLHj@ep-blue-frog-a8ao5sa5-pooler.eastus2.azure.neon.tech/beat_cancer?sslmode=require`,
);
export const db = drizzle(sql, { schema });
