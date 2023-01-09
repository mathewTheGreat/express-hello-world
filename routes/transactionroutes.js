const express = require("express");
const {
  getAllTransactions,
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/walletcontroller");
 
const router = express.Router();
 
router.route("/").get(getAllTransactions).post(createTransaction);
router.route("/:id").get(getTransactionById).put(updateTransaction).delete(deleteTransaction);
 
module.exports = router;