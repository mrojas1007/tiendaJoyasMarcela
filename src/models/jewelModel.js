const { pool } = require("../../db/connectionDB.js");
const format = require('pg-format');

const getJewels = async (limits = 10, page = 0, order_by = "stock_ASC") => {
    const [attribute, direction] = order_by.split("_");
    const offset = page * limits;
    const formattedQuery = format(
        "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
        attribute,
        direction,
        limits,
        offset
    );
    console.log("query: ", formattedQuery);
    const response = await pool.query(formattedQuery);
    return response.rows;
}

const getJewelsFilter = async (precio_max = 10000000, precio_min = 50, categoria = "categoria", metal = "metal") => {
    let query = "SELECT * FROM inventario WHERE precio <= %L AND precio >= %L ";
    
    if(categoria != "categoria") {
        query = query + "AND categoria = %L ";
    }else{
        query = query + "AND categoria = %s ";
    }
    
    if(metal != "metal") {
        query = query + "AND metal = %L ";
    }else{
        query = query + "AND metal = %s ";
    }
    
    const formattedQuery = format(
        query,
        precio_max, 
        precio_min, 
        categoria, 
        metal
    );
    console.log("query: ", formattedQuery);
    const response = await pool.query(formattedQuery);
    return response.rows;
}

module.exports = { getJewels, getJewelsFilter }