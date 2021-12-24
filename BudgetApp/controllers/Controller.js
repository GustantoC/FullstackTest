const { Transaction, Sequelize } = require('../models');
const { Op } = require('sequelize')

class Controller {
  static async getBalance(req, res, next) {
    try {
      let sumIncome = await Transaction.findAll({
        where: {
          income: true
        },
        attributes: [
          [
            Sequelize.fn('SUM', Sequelize.col('amount')),
            'totalIncome'
          ]
        ]
      })
      let sumExpense = await Transaction.findAll({
        where: {
          income: false
        },
        attributes: [
          [
            Sequelize.fn('SUM', Sequelize.col('amount')),
            'totalExpense'
          ]
        ]
      })
      sumIncome = sumIncome[0].dataValues.totalIncome
      sumExpense = sumExpense[0].dataValues.totalExpense
      res.status(200).json({
        balance: sumIncome - sumExpense
      })
    } catch (error) {
      next(error)
    }
  }
  static async getAllTransaction(req, res, next) {
    try {
      const response = await Transaction.findAll({},{
        order: [
          ['createdAt', 'DESC']
        ]
      })
      res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
  static async createTransaction(req, res, next) {
    try {
      let { description, amount, income } = req.body
      const response = await Transaction.create({
        description,
        amount,
        income
      })
      res.status(201).json(response)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller