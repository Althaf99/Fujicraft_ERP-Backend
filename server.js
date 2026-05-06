const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());


const sequelize = require('./src/config/database');
sequelize.sync();


// Routes

const rawMaterialsRouter = require('./src/routes/raw-material/raw-materials.routes');
const colorsRouter = require('./src/routes/raw-material/colors.routes');
const rawMaterialTypesRouter = require('./src/routes/raw-material/raw-material-types.routes');
const vendorsRouter = require('./src/routes/raw-material/vendors.routes');
const brandsRouter = require('./src/routes/raw-material/brands.routes');

const masterBatchColorsRouter = require('./src/routes/master-batch/master-batch-colors.routes');
const masterBatchInventoryRouter = require('./src/routes/master-batch/master-batch-inventory.routes');



app.use('/api/raw-materials', rawMaterialsRouter);
app.use('/api/colors', colorsRouter);
app.use('/api/raw-material-types', rawMaterialTypesRouter);
app.use('/api/vendors', vendorsRouter);
app.use('/api/brands', brandsRouter);

app.use('/api/master-batch-colors', masterBatchColorsRouter);
app.use('/api/master-batch-inventory', masterBatchInventoryRouter);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
