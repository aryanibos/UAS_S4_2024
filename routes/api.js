// import Student Controller
const EmployeeController = require("../controllers/EmployeeController");

// import express
const express = require("express");

// make an object router
const router = express.Router();

// make home routing
router.get("/", (req, res) => {
    res.send("Hello Arya Isnaidi");
});

// Routing for employees
router.get("/employees", EmployeeController.index);
router.post("/employees", EmployeeController.store);
router.put("/employees/:id", EmployeeController.update);
router.delete("/employees/:id", EmployeeController.destroy);
router.get("/employees/:id", EmployeeController.show);
router.get("/employees/search/:name", EmployeeController.search);
router.get("/employees/status/active", EmployeeController.active);
router.get("/employees/status/inactive", EmployeeController.inactive);
router.get("/employees/status/terminated", EmployeeController.terminated);

// export routing
module.exports = router;