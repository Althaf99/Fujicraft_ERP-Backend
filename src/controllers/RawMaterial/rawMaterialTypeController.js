const RawMaterialType = require('../../models/RawMaterial/RawMaterialType');

exports.getAll = async (req, res) => {
  const types = await RawMaterialType.findAll();
  res.json(types);
};

exports.create = async (req, res) => {
    console.log("Hello World")
  try {
    const type = await RawMaterialType.create(req.body);
    res.status(201).json(type);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  const type = await RawMaterialType.findByPk(req.params.id);
  if (type) res.json(type);
  else res.status(404).json({ error: 'Not found' });
};

exports.update = async (req, res) => {
  const type = await RawMaterialType.findByPk(req.params.id);
  if (!type) return res.status(404).json({ error: 'Not found' });
  await type.update(req.body);
  res.json(type);
};

exports.remove = async (req, res) => {
  const type = await RawMaterialType.findByPk(req.params.id);
  if (!type) return res.status(404).json({ error: 'Not found' });
  await type.destroy();
  res.json({ success: true });
};
