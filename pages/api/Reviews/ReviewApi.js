const utils = require("../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertReview = async (DataReceived, doc1) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Reviews");
    const insertEvent = await pool
      .request()
      .input("CompanyName", sql.VarChar(100), DataReceived.CompanyName)
      .input("LogoFileName", sql.NVarChar(sql.MAX), doc1)
      .input("UserName", sql.VarChar(50), DataReceived.UserName)
      .input("Designation", sql.VarChar(50), DataReceived.Designation)
      .input("Review", sql.NVarChar(sql.MAX), DataReceived.Review)
      .input("ActiveStatus", sql.Char(1), DataReceived.ActiveStatus)
      .input("CreatedBy", sql.BigInt, DataReceived.CreatedBy)
      .query(sqlQueries.InsertReview);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateReview = async (DataReceived, doc1, editid) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Reviews");
    const UpdateEvent = await pool
      .request()
      .input("ReviewID", sql.BigInt, editid)
      .input("CompanyName", sql.VarChar(100), DataReceived.CompanyName)
      .input("LogoFileName", sql.NVarChar(sql.MAX), doc1)
      .input("UserName", sql.VarChar(50), DataReceived.UserName)
      .input("Designation", sql.VarChar(50), DataReceived.Designation)
      .input("Review", sql.NVarChar(sql.MAX), DataReceived.Review)
      .input("ActiveStatus", sql.Char(1), DataReceived.ActiveStatus)
      .input("ModifyedBy", sql.BigInt, DataReceived.ModifyedBy)
      .query(sqlQueries.UpdateReview);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const getAllReview = async (DataReceived) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Reviews");
    const GetReviews = await pool.request().query(sqlQueries.GetallReview);
    return GetReviews.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneReview = async (ReviewId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Reviews");
    const GetoneReview = await pool
      .request()
      .input("ReviewId", sql.BigInt, ReviewId)
      .query(sqlQueries.GetoneReview);
    return GetoneReview.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteReview = async (ReviewId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Reviews");
    const deleteEvent = await pool
      .request()
      .input("ReviewId", sql.BigInt, ReviewId)
      .query(sqlQueries.DeleteReview);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  InsertReview: InsertReview,
  getAllReview: getAllReview,
  GetOneReview: GetOneReview,
  UpdateReview: UpdateReview,
  DeleteReview: DeleteReview,
};
