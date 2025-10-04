const Resume = require('../models/Resume');

exports.getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ updatedAt: -1 });
    res.json(resumes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createResume = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const saved = await newResume.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateResume = async (req, res) => {
  try {
    const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Resume not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteResume = async (req, res) => {
  try {
    const deleted = await Resume.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Resume not found' });
    res.json({ message: 'Resume deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
