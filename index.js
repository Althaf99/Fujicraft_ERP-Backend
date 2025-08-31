const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const sequelize = require('./src/config/database');
sequelize.sync();


// Routes

const rawMaterialsRouter = require('./src/routes/rawMaterials');
const colorsRouter = require('./src/routes/colors');
const rawMaterialTypesRouter = require('./src/routes/rawMaterialTypes');
const vendorsRouter = require('./src/routes/vendors');
const brandsRouter = require('./src/routes/brands');

app.use((req, res, next) => {
  console.log("🔎 Request Origin:", req.headers.origin);
  next();
});
app.use('/api/raw-materials', rawMaterialsRouter);
app.use('/api/colors', colorsRouter);
app.use('/api/raw-material-types', rawMaterialTypesRouter);
app.use('/api/vendors', vendorsRouter);
app.use('/api/brands', brandsRouter);


const PORT = process.env.PORT || 6000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 API is available at http://localhost:${PORT}/api`);
    });
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err.message);
    process.exit(1);
  }
}

startServer();