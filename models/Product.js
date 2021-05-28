const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Product = db.define(
    "product",
    {
        idProduct: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        code: {
            type: DataTypes.STRING,
        },
        barcode: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        purchasePrice: {
            type: DataTypes.DECIMAL,
        },
        basePrice: {
            type: DataTypes.DECIMAL,
        },
        unitPrice: {
            type: DataTypes.DECIMAL,
        },
        active: {
            type: DataTypes.TINYINT,
        },
        status: {
            type: DataTypes.TINYINT,
        },
    },
    {
        timestamps: false,
        freezeTableName:true
    }
);

module.exports = Product;
