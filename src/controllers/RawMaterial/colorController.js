const Color = require('../../models/RawMaterial/Color');

exports.getAll = async (req, res) => {
  const colors = await Color.findAll();
  res.json(colors);
};

exports.create = async (req, res) => {
  try {
    const color = await Color.create(req.body);
    res.status(201).json(color);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  const color = await Color.findByPk(req.params.id);
  if (color) res.json(color);
  else res.status(404).json({ error: 'Not found' });
};

exports.update = async (req, res) => {
  const color = await Color.findByPk(req.params.id);
  if (!color) return res.status(404).json({ error: 'Not found' });
  await color.update(req.body);
  res.json(color);
};

exports.remove = async (req, res) => {
  const color = await Color.findByPk(req.params.id);
  if (!color) return res.status(404).json({ error: 'Not found' });
  await color.destroy();
  res.json({ success: true });
};
