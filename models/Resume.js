const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  title: String,
  content: mongoose.Schema.Types.Mixed // flexible: string, array, object
});

const ResumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  summary: String,
  education: [{ institution: String, degree: String, start: String, end: String, description: String }],
  experience: [{ company: String, role: String, start: String, end: String, description: String }],
  projects: [{ name: String, description: String, link: String }],
  skills: [String],
  customSections: [SectionSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ResumeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Resume', ResumeSchema);
