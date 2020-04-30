import User from '../models/user';
import jwt from 'jsonwebtoken';

export default {
  login: async (req, res, next) => {
    // Generate token for 20 mins
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: 1200 });

    return res.send({ token });
  },

  register: async (req, res, next) => {
    // Assign variables from body & register user
    const { login, email, password } = req.body;
    const user = new User({ login, email });
    await User.register(user, login);

    res.send({ message: 'User created successfully!' });
  },

  test: async (req, res, next) => {
    res.send({ message: 'You are authorized to this end-point!' });
  },
};
