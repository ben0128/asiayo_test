const express = require("express");
const router = express.Router();

const { currencies } = require("../data/currencyRates.js");

router.get("/", (req, res) => {
  try {
    const source = req.query.source;
    const target = req.query.target;
    let amount = req.query.amount;
    if (!source || !target || !amount) {
      return res.status(400).json({
        msg: "fail",
        err: "missing query string",
      });
    }
    if (!currencies[source] || !currencies[source][target]) {
      return res.status(400).json({
        msg: "fail",
        err: "invalid source or target",
      });
    }
    amount = parseFloat(amount.replace(/[^0-9.]/g, ""));
    if (isNaN(amount)) {
      return res.status(400).json({
        msg: "fail",
        err: "invalid amount",
      });
    }
    const result = (currencies[source][target] * amount)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return res.status(200).json({
      msg: "success",
      amount: `$${result}`,
    });
  } catch (err) {
    return res.status(400).json({
      msg: "fail",
      err,
    });
  }
});

module.exports = router;
