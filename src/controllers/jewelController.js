const { getJewels, getJewelsFilter } = require("../models/jewelModel.js")

const getJewelry = async (req, res) => {
    try {
        //limits, page, order_by
        const {limits, page, order_by} = req.query;
        const joyas = await getJewels(limits, page, order_by);
        res.send(joyas);
    } catch (error) {
        res.status(500).json({ msg: "Ha ocurrido un error obteniendo las joyas", error });
    }
}

const getJewelryFilter = async (req, res) => {
    try {
        //precio_max, precio_min, categoria, metal
        const {precio_max, precio_min, categoria, metal} = req.query;
        const joyas = await getJewelsFilter(precio_max, precio_min, categoria, metal);
        res.send(joyas);
    } catch (error) {
        res.status(500).json({ msg: "Ha ocurrido un error obteniendo las joyas con filtro", error });
    }
}

module.exports = { getJewelry, getJewelryFilter }