// lib/db.ts
import mysql from "mysql2/promise";

export async function query<T = any>(
  sql: string,
  values?: any[]
): Promise<T[]> {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const [results] = await connection.execute(sql, values);
  await connection.end();
  return results as T[];
}
