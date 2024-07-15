const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/clothes', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

const clothesRoutes = require('./routes/clothes');
const productRoutes = require('./routes/products'); 

app.use('/api/clothes', clothesRoutes);
app.use('/api/products', productRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

