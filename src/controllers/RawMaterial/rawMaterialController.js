const RawMaterial = require('../../models/RawMaterial/RawMaterial');

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

// Update by matching materialType, Color, Vendor, Brand and summing weights
exports.updateByAttributes = async (req, res) => {
  try {
    const { RawMaterialTypeId, ColorId, VendorId, BrandId, weight } = req.body;
    if (!RawMaterialTypeId || !ColorId || !VendorId || !BrandId || typeof weight !== 'number') {
      return res.status(400).json({ error: 'Missing or invalid fields' });
    }
    const material = await RawMaterial.findOne({
      where: {
        RawMaterialTypeId,
        ColorId,
        VendorId,
        BrandId
      }
    });
    if (!material) {
      return res.status(404).json({ error: 'Raw material not found for given attributes' });
    }
    material.weight += weight;
    await material.save();
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
