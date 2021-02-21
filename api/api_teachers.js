const express = require("express");
const router = express.Router();

const {
  getTeachers,
  getTeachersById,
  createTeachers,
  updateTeachers,
  deleteTeachers,
} = require("../models/teachers");

router.get("/teachers", getTeachers);
router.get("/teachers/:id", getTeachersById);
router.post("/teachers", createTeachers);
router.put("/teachers", updateTeachers);
router.delete("/teachers", deleteTeachers);

module.exports = router;
