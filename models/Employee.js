// import database
const db = require("../config/database");

// make Employe model
class Employee {
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const sql = "SELECT * FROM employees";
            db.query(sql, (sql, results) => {
                resolve(results);
            });
        });
    }

    /**
     * TODO 1: Buat fungsi untuk insert data.
     * Method menerima parameter data yang akan diinsert.
     * Method mengembalikan data Employee yang baru diinsert.
     */
    static create(Employee) {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk insert data
            const sql = "INSERT INTO employees SET ?";
            db.query(sql, Employee, (err, results) => {
                resolve(this.show(results.insertId));
            });
        });
    }

    static find(id) {
        // lakukan promise, select by id
        return new Promise((resolve, reject) => {
            // mengambil data berdasarkan id
            const sql = `SELECT * FROM employees WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static findByStatus(status) {
        // lakukan promise, select by status
        return new Promise((resolve, reject) => {
            // mengambil semua data perstatus
            const sql = `SELECT * FROM employees WHERE status = ?`;
            db.query(sql, status, (err, results) => {
                resolve(results[0]);
            });
        });
    }

    static async update(id, data) {
        // update data
        await new Promise((resolve, reject) => {
            // query untuk update data
            const sql = "UPDATE employees SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });

        // select data by id
        const employee = await this.find(id);
        return employee;
    }

    static async delete(id) {
        // query delete
        return new Promise((resolve, reject) => {
            // delete data
            const sql = "DELETE FROM employees WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    static show(id) {
        return new Promise((resolve, reject) => {
            // query untuk select data berdasarkan id
            const sql = `SELECT * FROM employees WHERE id = ${id} `;
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }

    static search(name) {
        return new Promise((resolve, reject) => {
            // query untuk select data berdasarkan name
            // Like berguna untuk mencari data yang sesuai dengan parameter yang diberikan
            const sql = `SELECT * FROM employees WHERE name LIKE '%${name}%' `;
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }

}


// export model
module.exports = Employee;