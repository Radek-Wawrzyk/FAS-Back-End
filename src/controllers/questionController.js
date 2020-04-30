import Question from '../models/question';

export default {
  sendQuestion: async (req, res, next) => {
    const question = await new Question(req.body).save();

    return res.status(201).send({ 
      message: 'Success',
      question: question,
    });
  },

  getAll: async (req, res, next) => {
    const questions = await Question.find();
    
    return res.status(200).send({ 
      data: questions,
    });
  },

  getOne: async (req, res, next) => {
    const question = await Question.findOne({ '_id': req.params.id });
    
    return res.status(200).send({ 
      question
    });
  },

  saveQuestion: async (req, res, next) => {
    let question = await Question.findOne({ '_id': req.params.id });

    // update object
    question.isAnswered = true;
    question.answerText = req.body.answerText;
    await question.save();

    return res.status(200).send({ 
      question
    });
  },
};
