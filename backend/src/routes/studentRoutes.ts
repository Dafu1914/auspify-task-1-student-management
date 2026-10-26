import express from 'express';
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController';

const router = express.Router();

router.route('/')
  .get(getStudents)
  .post(createStudent);

router.route('/:id')
  .put(updateStudent)
  .delete(deleteStudent);

export default router;