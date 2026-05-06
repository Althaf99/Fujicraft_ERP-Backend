const MasterBatchInventory = require('../../models/master-batch/master-batch-inventory.model');

exports.getAll = async (req, res) => {
  const inventory = await MasterBatchInventory.findAll();
  res.json(inventory);
};

exports.create = async (req, res) => {
  try {
    const item = await MasterBatchInventory.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
