const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const sequelize = require('./src/config/database');
sequelize.sync();


// Routes

const rawMaterialsRouter = require('./src/routes/RawMaterial/RawMaterials');
const colorsRouter = require('./src/routes/RawMaterial/RawMaterialColors');
const rawMaterialTypesRouter = require('./src/routes/RawMaterial/RawMaterialTypes');
const rawMaterialVendorRouter = require('./src/routes/RawMaterial/RawMaterialVendors');
const rawMaterialBrandRouter = require('./src/routes/RawMaterial/RawMaterialBrands');


app.use('/api/raw-materials', rawMaterialsRouter);
app.use('/api/raw-material-colors', colorsRouter);
app.use('/api/raw-material-types', rawMaterialTypesRouter);
app.use('/api/raw-material-vendors', rawMaterialVendorRouter);
app.use('/api/raw-material-brands', rawMaterialBrandRouter);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
