import mongoose from 'mongoose';

const Item = mongoose.Schema({
  _id: Number,
  answerText: String,
  choiceText: String,
  nextLevelQues: Number,
  parentId: Number,
  childrens: Array,
});

export default mongoose.model('Item', Item, 'items');