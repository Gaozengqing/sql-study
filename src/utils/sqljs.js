
import initSqlJs, { Database, SqlJsStatic } from "sql.js";

/**
 * SQL 执行器
 *
 * @author coder gzq
 */
let SQL;

/**
 * 获取初始化 DB
 * @param initSql
 */
export const initDB = async (initSql) => {
  if (!SQL) {
    SQL = await initSqlJs({
      // Required to load the wasm binary asynchronously
      locateFile: () =>
        "https://cdn.bootcdn.net/ajax/libs/sql.js/1.7.0/sql-wasm.wasm",
    });
  }
  // Create a database
  const db = new SQL.Database();
  if (initSql) {
    // Execute a single SQL string that contains multiple statements
    db.run(initSql); // Run the query without returning anything
  }
  return db;
};

/**
 * 执行 SQL
 * @param db
 * @param sql
 */
export const runSQL = (db, sql) => {
  return db.exec(sql);
};