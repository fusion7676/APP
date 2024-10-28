import { Injectable } from '@angular/core';
import { CapacitorSQLite } from 'capacitor-sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbName: string = 'mydatabase.db';

  constructor() {
    this.createDatabase();
  }
  async createDatabase() {
    try {
      await CapacitorSQLite.open({ database: this.dbName });
      await this.createTable();
    } catch (error) {
      console.error('Error al crear la bd', error);
    }
  }
  private async createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
      )
    `;
    await this.executeSQL(sql);
  }


  async addUser(name: string) {
    const sql = 'INSERT INTO users (name) VALUES (?)';
    return this.executeSQL(sql, [name]);
  }

  async getUsers() {
    const sql = 'SELECT * FROM users';
    return await this.executeSQL(sql);
  }


  async deleteUser(id: number) {
    const sql = 'DELETE FROM users WHERE id = ?';
    return this.executeSQL(sql, [id]);
  }

  async updateUser(id: number, name: string) {
    const sql = 'UPDATE users SET name = ? WHERE id = ?';
    return this.executeSQL(sql, [name, id]);
  }


  private async executeSQL(sql: string, params: any[] = []) {
    try {
      const result = await CapacitorSQLite.execute({
        database: this.dbName,
        statement: sql,
        values: params,
      });
      return result;
    } catch (error) {
      console.error('Error executing SQL', error);
      throw error;
    }
  }
}
