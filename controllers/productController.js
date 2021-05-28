const Product = require("../models/Product");
const { Op } = require("sequelize");

module.exports.getAll = async (req, res) => {
    try {
        const products = await Product.findAll({
            where: {
                status: 1,
            },
        });
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports.search = async (req, res) => {
    try {
        const text = req.params.text;
        const products = await Product.findAll({
            where: {
                [Op.or]: [
                    { barcode: { [Op.like]: `%${text}%` } },
                    { name: { [Op.like]: `%${text}%` } },
                ],
            },
        });
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports.store = async (req, res) => {
    try {
        await Product.create(req.body);
        res.status(201).json({ message: "Producto registrado." });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports.update = async (req, res) => {
    const idProduct = req.params.id;
    const body = req.body;

    try {
        const product = await Product.findOne({
            where: {
                idProduct,
                active: 1,
                status: 1,
            },
        });
        if (!product) {
            throw Error("Producto. Registro no encontrado");
        }
        await Product.update(body, {
            where: {
                idProduct,
            },
        });
        res.json({ message: "Producto actualizado." });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports.getOne = async (req, res) => {
    const idProduct = req.params.id;
    try {
        const product = await Product.findOne({
            where: {
                idProduct,
                status: 1,
                active: 1,
            },
        });
        if (!product) {
            throw Error("Producto. Registro no encontrado");
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports.delete = async (req, res) => {
    const idProduct = req.params.id;
    try {
        const product = await Product.findOne({
            where: {
                idProduct,
                status: 1,
                active: 1,
            },
        });
        if (!product) {
            throw Error("Producto. Registro no encontrado");
        }

        await Product.update(
            { status: 0, active: 0 },
            {
                where: {
                    idProduct,
                },
            }
        );
        res.json({
            message: "Producto eliminado",
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
