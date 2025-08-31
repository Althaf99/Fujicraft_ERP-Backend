const RawMaterial = require('../models/RawMaterial');

exports.getAll = async (req, res) => {
  const materials = await RawMaterial.findAll();
  res.json(materials);
};

exports.create = async (req, res) => {
  try {
    const material = await RawMaterial.create(req.body);
    res.status(201).json(material);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  const material = await RawMaterial.findByPk(req.params.id);
  if (material) res.json(material);
  else res.status(404).json({ error: 'Not found' });
};

exports.update = async (req, res) => {
  const material = await RawMaterial.findByPk(req.params.id);
  if (!material) return res.status(404).json({ error: 'Not found' });
  await material.update(req.body);
  res.json(material);
};

exports.remove = async (req, res) => {
  const material = await RawMaterial.findByPk(req.params.id);
  if (!material) return res.status(404).json({ error: 'Not found' });
  await material.destroy();
  res.json({ success: true });
};
