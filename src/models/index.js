const studentsList = require("../mocks/students");

const students = [...studentsList];

/**
 * Gets all students.
 * @returns {Array} An array of student objects.
 */
const index = () => students;

/**
 * Creates a new student.
 * @param {Object} student - The student data object.
 * @returns {Object|null} The newly created student object or null if the data is invalid.
 */
const create = (student) => {
  if (isStudentDataValid(student)) {
    const newStudent = { id: students.length + 1, ...student };
    students.push(newStudent);
    return newStudent;
  }
  return null;
};

/**
 * Gets a student by ID.
 * @param {number} id - The student ID.
 * @returns {Object|undefined} The student object or undefined if not found.
 */
const show = (id) => students.find((stud) => stud.id == id);

/**
 * Updates a student by ID.
 * @param {number} id - The student ID.
 * @param {Object} studentData - The updated student data object.
 * @returns {Object|null} The updated student object or null if not found or data is invalid.
 */
const update = (id, studentData) => {
  const index = students.findIndex((stud) => stud.id == id);
  if (index !== -1 && isStudentDataValid(studentData)) {
    students[index] = { ...students[index], ...studentData };
    return students[index];
  }
  return null;
};

/**
 * Deletes a student by ID.
 * @param {number} id - The student ID.
 * @returns {Object|null} The removed student object or null if not found.
 */
const destroy = (id) => {
  const index = students.findIndex((stud) => stud.id == id);
  if (index !== -1) {
    const removedStudent = students.splice(index, 1);
    return removedStudent[0];
  }
  return null;
};

/**
 * Gets the top five students by GPA.
 * @returns {Array} An array of the top five student objects.
 */
const topStudents = () => students.sort((a, b) => b.GPA - a.GPA).slice(0, 5);

/**
 * Validates the student data object.
 * @param {Object} student - The student data object.
 * @returns {boolean} True if the student data is valid, false otherwise.
 */
const isStudentDataValid = (student) => {
  const requiredFields = ["firstName", "lastName", "GPA", "email", "coOpEligible", "postGraduateProgram"];
  
  for (const key of requiredFields) {
    if (student[key] === null || student[key] === "" || student[key] === undefined) {
      return false;
    }
  }
  return true;
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
  topStudents,
};
