const express = require("express");
const router = express.Router();

const {
  getCourse,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  searchCourseByName,
  searchCourseByDescription,
  searchCourseByTeacherName,
} = require("../models/course");

router.get("/course", getCourse);
router.get("/course/:id", getCourseById);
router.post("/course", createCourse);
router.put("/course", updateCourse);
router.delete("/course", deleteCourse);
router.get("/search/name", searchCourseByName);
router.get("/search/dcpt", searchCourseByDescription);
router.get("/search/teacher", searchCourseByTeacherName);

module.exports = router;
