const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const sequelize = require('./src/config/database');
sequelize.sync();


// Routes

const rawMaterialsRouter = require('./src/routes/RawMaterial/rawMaterials');
const colorsRouter = require('./src/routes/RawMaterial/colors');
const rawMaterialTypesRouter = require('./src/routes/RawMaterial/rawMaterialTypes');
const vendorsRouter = require('./src/routes/RawMaterial/vendors');
const brandsRouter = require('./src/routes/RawMaterial/brands');

const masterBatchColorsRouter = require('./src/routes/MasterBatch/masterBatchColors');
const masterBatchInventoryRouter = require('./src/routes/MasterBatch/masterBatchInventory');



app.use('/api/raw-materials', rawMaterialsRouter);
app.use('/api/colors', colorsRouter);
app.use('/api/raw-material-types', rawMaterialTypesRouter);
app.use('/api/vendors', vendorsRouter);
app.use('/api/brands', brandsRouter);

app.use('/api/master-batch-colors', masterBatchColorsRouter);
app.use('/api/master-batch-inventory', masterBatchInventoryRouter);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
