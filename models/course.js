const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "123456789",
  database: "demo_database",
  port: "5432",
});

const getCourse = async (req, res) => {
  const response = await pool.query("SELECT * FROM course ORDER BY id ASC");
  res.status(200).json(response.rows);
};

const getCourseById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM course WHERE id = $1", [id]);
  res.json(response.rows);
};

const createCourse = async (req, res) => {
  const {
    id,
    course_name,
    course_description,
    course_length,
    language,
    course_teachers,
  } = req.body;
  const response = await pool.query(
    "INSERT INTO course (id, course_name, course_description, course_length, language, course_teachers) VALUES ($1, $2, $3, $4, $5, $6)",
    [
      id,
      course_name,
      course_description,
      course_length,
      language,
      course_teachers,
    ]
  );
  res.json({
    message: "Course Added successfully",
    body: {
      user: {
        id,
        course_name,
        course_description,
        course_length,
        language,
        course_teachers,
      },
    },
  });
};

const updateCourse = async (req, res) => {
  //const id = parseInt(req.params.id);
  const {
    id,
    course_name,
    course_description,
    course_length,
    language,
    course_teachers,
  } = req.body;

  const response = await pool.query(
    "UPDATE course SET course_name = $2, course_description = $3, course_length = $4, language = $5, course_teachers = $6 WHERE id = $1",
    [
      id,
      course_name,
      course_description,
      course_length,
      language,
      course_teachers,
    ]
  );
  res.json("Course Updated Successfully");
};

const deleteCourse = async (req, res) => {
  //const id = parseInt(req.params.id);
  const { id } = req.body;
  await pool.query("DELETE FROM course where id = $1", [id]);
  res.json(`Course ${id} deleted Successfully`);
};

const searchCourseByName = async (req, res) => {
  //const course_name = req.params.name;
  const { course_name } = req.body;
  const response = await pool.query(
    "SELECT * FROM course WHERE course_name = $1",
    [course_name]
  );
  res.json(response.rows);
};

const searchCourseByDescription = async (req, res) => {
  //const course_description = req.params.dcpt;
  const { course_description } = req.body;
  const response = await pool.query(
    "SELECT * FROM course WHERE course_description = $1",
    [course_description]
  );
  res.json(response.rows);
};

const searchCourseByTeacherName = async (req, res) => {
  //const course_teachers = req.params.teacher;
  const { course_teachers } = req.body;
  const response = await pool.query(
    "SELECT * FROM course WHERE course_teachers = $1",
    [course_teachers]
  );
  res.json(response.rows);
};

module.exports = {
  getCourse,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  searchCourseByName,
  searchCourseByDescription,
  searchCourseByTeacherName,
};
