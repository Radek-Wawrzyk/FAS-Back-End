import items from '../models/item';

export default {
  findAll: async (req, res, next) => {
    const response = await items.find();

    response.forEach(first => {
      first.childrens = [];
      response.forEach(second => {
        first._id === second.parentId ? first.childrens.push(second) : false;
      });
    });
    
    return res.status(200).send({ 
      items: response,
    });
  },

  getOne: async (req, res, next) => {
    const item = await items.findOne({ '_id': req.params.id });
    const itemChildrens = await items.find({ 'parentId': item._id });
    item.childrens = [...itemChildrens];
    
    return res.status(200).send({ 
      item
    });
  },
};
