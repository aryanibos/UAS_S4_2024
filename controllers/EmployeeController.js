// import model Employee
const Employee = require("../models/Employee")

class EmployeeController {
    async index(req, res) {
        // TODO 4: Tampilkan data employees
        const employees = await Employee.all();

        // Jika data employees ada
        if (employees) {
            const data = {
                message: "Get all Resource",
                data: employees,
            };

            res.status(200).json(data);

            // Jika data employees tidak ada
        } else {
            const data = {
                message: "Data is empty",
            };

            res.status(200).json(data);
        }
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */

        const { name, gender, phone, address, email, status, hired_on, timestamp } = req.body
        const employees = await Employee.create(req.body);
        // melakukan pengecekan data dan validasi
        if (employees) {
            const data = {
                message: "Resource is added successfully",
                data: employees,
            };
            res.status(201).json(data);
        } else {
            const data = {
                message: "All fields must be filled correctly",
            };
            res.status(422).json(data);
        }

    }


    async update(req, res) {
        /**
         * check id employees
         * jika ada, lakukan update
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const employees = await Employee.find(id);

        if (employees) {
            // update data
            const employeeUpdated = await Employee.update(id, req.body);
            const data = {
                message: "Resoures is updated successfully",
                data: employeeUpdated,
            };

            res.status(200).json(data);
        } else {
            // kirim data tidak ada
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }



    }

    async destroy(req, res) {
        const { id } = req.params;

        /**
         * cari id
         * jika ada, hapus data
         * jika tidak, kirim data tidak ada
         */

        const employee = await Employee.find(id);
        // melakukan validasi jika data ada atau tidak ada
        if (employee) {
            // hapus data
            await Employee.delete(id);
            const data = {
                message: "Resource is deleted successfully",
            };

            res.status(200).json(data);
        } else {
            // data tidak ada
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        /**
         * cari id
         * jika ada, kirim datanya
         * jika tidak, kirim data tidak ada
         */
        const { id } = req.params;

        const employee = await Employee.find(id);
        // melakukan validasi jika data ada atau tidak ada
        if (employee) {
            const data = {
                message: "Get detail Resource",
                data: employee,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }

    }

    async search(req, res) {
        const { name } = req.params;

        // melakukan search nama dengan function search
        const employee = await Employee.search(name);

        // melakukan validasi jika data ada atau tidak ada
        if (employee) {
            const data = {
                message: "Get Searched Resource",
                data: employee,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resource not found",
            };

            res.status(404).json(data);
        }
    }

    async active(req, res) {
        // melakukan pencarian status active menggunakan function findByStatus
        const employee = await Employee.findByStatus("active");

        // melakukan validasi jika data ada atau tidak ada
        if (employee) {
            const data = {
                message: "Get active Resource",
                data: employee,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async inactive(req, res) {
        // melakukan pencarian status inactive menggunakan function findByStatus
        const employee = await Employee.findByStatus("inactive");

        // melakukan validasi jika data ada atau tidak ada
        if (employee) {
            const data = {
                message: "Get inactive Resource",
                data: employee,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }

    async terminated(req, res) {
        // melakukan pencarian status terminated menggunakan function findByStatus
        const employee = await Employee.findByStatus("terminated");

        // melakukan validasi jika data ada atau tidak ada
        if (employee) {
            const data = {
                message: "Get terminated Resource",
                data: employee,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Data tidak ada",
            };

            res.status(404).json(data);
        }
    }
}


// make an object Student Controller
const object = new EmployeeController();

// export object
module.exports = object;