import mongoose from 'mongoose';

const Question = mongoose.Schema({
  title: String,
  message: String,
  email: String,
  isAnswered: Boolean,
  answerText: String,
});

export default mongoose.model('Question', Question, 'questions');