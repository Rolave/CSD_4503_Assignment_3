const {
  index,
  create,
  show,
  update,
  destroy,
  topStudents,
} = require("../models");

const NOT_CREATED_MESSAGE = "Student not created, all data is necessary!";
const NOT_UPDATED_MESSAGE = "Student not updated, all data is necessary!";
const NOT_FOUND_MESSAGE = "Student not found!";
const ERROR_404_MESSAGE = "Resource not found.";

/**
 * Gets all students.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAllStudents = (req, res) => {
  res.json(index());
};

/**
 * Creates a new student.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const createStudent = (req, res) => {
  const studentData = req.body || {};
  const newStudent = create(studentData);
  if (newStudent) {
    res.status(201).json(newStudent);
  } else {
    res.status(500).json({ message: NOT_CREATED_MESSAGE });
  }
};

/**
 * Gets a student by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getStudentById = (req, res) => {
  const { id } = req.params || {};
  const requestedStudent = show(id);
  if (requestedStudent) {
    res.json(requestedStudent);
  } else {
    res.status(404).json({ message: NOT_FOUND_MESSAGE });
  }
};

/**
 * Updates a student by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const updateStudentById = (req, res) => {
  const { id } = req.params || {};
  const studentData = req.body || {};
  const requestedStudent = show(id);
  if (requestedStudent) {
    const updatedStudend = update(id, studentData);
    if (updatedStudend) {
      res.json(updatedStudend);
    }
    res.status(500).json({ message: NOT_UPDATED_MESSAGE });
  } else {
    res.status(404).json({ message: NOT_FOUND_MESSAGE });
  }
};

/**
 * Deletes a student by ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const deleteStudentById = (req, res) => {
  const { id } = req.params || {};
  const removedStudent = destroy(id);
  if (removedStudent) {
    res.json(removedStudent);
  } else {
    res.status(404).json({ message: NOT_FOUND_MESSAGE });
  }
};

/**
 * Gets the top five students by GPA.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getTopFiveStudents = (req, res) => {
  res.json(topStudents());
};

/**
 * Handles unknown routes by sending a 404 status code and an error message.
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getUnknonRoute = (req, res) => {
  res.status(404).json({ message: ERROR_404_MESSAGE });
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  getTopFiveStudents,
  getUnknonRoute,
};
