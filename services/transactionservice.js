const WalletModel = require("../model/wallet");
 
exports.getAllTransactions = async () => {
  return await WalletModel.find();
};
 
exports.createTransaction = async (blog) => {
  return await WalletModel.create(blog);
};
exports.getTransactionById = async (id) => {
  return await WalletModel.findById(id);
};
 
exports.updateTransaction = async (id, blog) => {
  return await WalletModel.findByIdAndUpdate(id, blog);
};
 
exports.deleteTransaction = async (id) => {
  return await WalletModel.findByIdAndDelete(id);
};