const Vendor = require('../models/Vendor');

exports.getAll = async (req, res) => {
  const vendors = await Vendor.findAll();
  res.json(vendors);
};

exports.create = async (req, res) => {
  try {
    const vendor = await Vendor.create(req.body);
    res.status(201).json(vendor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.id);
  if (vendor) res.json(vendor);
  else res.status(404).json({ error: 'Not found' });
};

exports.update = async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.id);
  if (!vendor) return res.status(404).json({ error: 'Not found' });
  await vendor.update(req.body);
  res.json(vendor);
};

exports.remove = async (req, res) => {
  const vendor = await Vendor.findByPk(req.params.id);
  if (!vendor) return res.status(404).json({ error: 'Not found' });
  await vendor.destroy();
  res.json({ success: true });
};
