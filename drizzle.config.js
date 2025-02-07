const config = {
  dialect: "postgresql",
  schema: "./src/utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_wQa5Md3YOLHj@ep-blue-frog-a8ao5sa5-pooler.eastus2.azure.neon.tech/beat_cancer?sslmode=require",
    connectionString: "postgresql://neondb_owner:npg_wQa5Md3YOLHj@ep-blue-frog-a8ao5sa5-pooler.eastus2.azure.neon.tech/beat_cancer?sslmode=require",
  },
};

export default config;