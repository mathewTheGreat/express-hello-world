const WalletModel = require('../model/wallet')
 
exports.getAllTransactions = async () => {
  return await WalletModel.find();
};
 
exports.createTransaction = async (transaction) => {
  return await WalletModel.create(transaction);
};
exports.getTransactionById = async (id) => {
  return await WalletModel.findById(id);
};
 
exports.updateTransaction = async (id, transaction) => {
  return await WalletModel.findByIdAndUpdate(id, transaction);
};
 
exports.deleteTransaction = async (id) => {
  return await WalletModel.findByIdAndDelete(id);
};