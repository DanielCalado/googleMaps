const { User: MapModel } = require("../models/User");

const userController = {
  create: async (req, res) => {
    try {
      const markers = [
        {
          position:  req.body.latitude,
          title: req.body.titulo,
          content: req.body.descricao,
          categoria: req.body.categoria,
          imagem1: req.body.imagem1,
          imagem2: req.body.imagem2,
          imagem3: req.body.imagem3
        }
      ];
      const response = await MapModel.create(markers);
      res.status(201).json({ response, msg: "Usuário cadastrado!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await MapModel.find();
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
  deleteMap: async (req, res) => {
    try {
      const userId = req.params.id;
      const response = await MapModel.findByIdAndDelete(userId);
      res.status(200).json({ response, msg: "Usuário deletado!" });
    } catch (error) {
      console.log(error);
    }
  },
  updateMap: async (req, res) => {
    try {
      const mapId = req.params.id;
      const updatedData = {
        position: req.body.position,
        title: req.body.title,
        content: req.body.content,
        categoria: req.body.categoria,
        imagem1: req.body.imagem1,
        imagem2: req.body.imagem2,
        imagem3: req.body.imagem3
      };
      const response = await MapModel.findByIdAndUpdate(mapId, updatedData, { new: true });
      res.status(200).json({ response, msg: "Mapa atualizado!" });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = userController;