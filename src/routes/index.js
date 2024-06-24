const {
  getIndexPage,
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  getTopFiveStudents,
  getUnknonRoute,
} = require("../controllers");

/**
 * Sets up the student routes.
 * @param {Object} app - The Express app object.
 */
const studentsRoutes = (app) => {
  /**
   * Route to get all students.
   * @name GET /api/all-students
   * @function
   * @memberof module:studentsRoutes
   */
  app.get("/api/all-students", getAllStudents);

  /**
   * Route to create a new student.
   * @name POST /api/create-student
   * @function
   * @memberof module:studentsRoutes
   */
  app.post("/api/create-student", createStudent);

  /**
   * Route to get a student by ID.
   * @name GET /api/show-student-info/:id
   * @function
   * @memberof module:studentsRoutes
   */
  app.get("/api/show-student-info/:id", getStudentById);

  /**
   * Route to update a student by ID.
   * @name PUT /api/update-student-info/:id
   * @function
   * @memberof module:studentsRoutes
   */
  app.put("/api/update-student-info/:id", updateStudentById);

  /**
   * Route to delete a student by ID.
   * @name DELETE /api/delete-student/:id
   * @function
   * @memberof module:studentsRoutes
   */
  app.delete("/api/delete-student/:id", deleteStudentById);

  /**
   * Route to get the top five students by GPA.
   * @name GET /api/top-five-students
   * @function
   * @memberof module:studentsRoutes
   */
  app.get("/api/top-five-students", getTopFiveStudents);

  /**
   * Catch-all route handler for unknown routes.
   * Responds with a 404 status code and an error message.
   * @name GET *
   * @function
   * @memberof module:studentsRoutes
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  app.get("*", getUnknonRoute);
};

module.exports = studentsRoutes;
