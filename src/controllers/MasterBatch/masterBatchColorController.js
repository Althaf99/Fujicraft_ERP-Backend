const MasterBatchColor = require('../../models/MasterBatch/MasterBatchColor');

exports.getAll = async (req, res) => {
  const colors = await MasterBatchColor.findAll();
  res.json(colors);
};

exports.create = async (req, res) => {
  try {
    const color = await MasterBatchColor.create(req.body);
    res.status(201).json(color);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

