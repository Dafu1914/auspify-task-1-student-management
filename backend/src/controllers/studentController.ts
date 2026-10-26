import { Request, Response } from 'express';
import Student from '../models/Student';

// @desc    Create a new student
export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ success: true, data: student });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get all students
export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.status(200).json({ success: true, count: students.length, data: students });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Update a student
export const updateStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!student) return res.status(404).json({ success: false, error: 'Student not found' });
    res.status(200).json({ success: true, data: student });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Delete a student
export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ success: false, error: 'Student not found' });
    res.status(200).json({ success: true, message: 'Student deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};