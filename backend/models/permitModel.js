const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Permit = sequelize.define('Permit', {
  // Define your model attributes
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING, // Assuming phone number can be stored as a string
    allowNull: false,
  },
  citizenship: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  businessType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tinNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registrationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  purposeOfImportation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT, // Assuming weight can be stored as a float
    allowNull: false,
  },
  unitOfMeasurement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantityOfProduct: {
    type: DataTypes.INTEGER, // Assuming quantity can be stored as an integer
    allowNull: false,
  },
  descriptionOfProduct: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Permit;
