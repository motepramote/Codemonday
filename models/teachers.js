const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "123456789",
  database: "demo_database",
  port: "5432",
});

const getTeachers = async (req, res) => {
  const response = await pool.query("SELECT * FROM teachers ORDER BY id ASC");
  res.status(200).json(response.rows);
};

const getTeachersById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query("SELECT * FROM teachers WHERE id = $1", [
    id,
  ]);
  res.json(response.rows);
};

const createTeachers = async (req, res) => {
  const { id, first_name, last_name, date_of_birth, age, country } = req.body;
  const response = await pool.query(
    "INSERT INTO teachers (id, first_name, last_name, date_of_birth, age, country) VALUES ($1, $2, $3, $4, $5, $6)",
    [id, first_name, last_name, date_of_birth, age, country]
  );
  res.json({
    message: "Teachers Added successfully",
    body: {
      user: { id, first_name, last_name, date_of_birth, age, country },
    },
  });
};

const updateTeachers = async (req, res) => {
  //const id = parseInt(req.params.id);
  const { id, first_name, last_name, date_of_birth, age, country } = req.body;

  const response = await pool.query(
    "UPDATE teachers SET first_name = $2, last_name = $3, date_of_birth = $4, age = $5, country = $6 WHERE id = $1",
    [id, first_name, last_name, date_of_birth, age, country]
  );
  res.json("User Updated Successfully");
};

const deleteTeachers = async (req, res) => {
  //const id = parseInt(req.params.id);
  const { id } = req.body;
  await pool.query("DELETE FROM teachers where id = $1", [id]);
  res.json(`teachers ${id} deleted Successfully`);
};

module.exports = {
  getTeachers,
  getTeachersById,
  createTeachers,
  updateTeachers,
  deleteTeachers,
};
