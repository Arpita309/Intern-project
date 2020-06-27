const express = require('express');
const stripe=require('stripe')(process.env.secret_key)
const uuid = require("uuid/v4");
const bodyParser = require('body-parser');
const PaymentRouter = express.Router();
PaymentRouter.use(bodyParser.json());

PaymentRouter.route('/')
.post( (req, res) => {
    const { product, token } = req.body;
    console.log("PRODUCT ", product);
    console.log("PRICE ", product.price);
    const idempontencyKey = uuid();
  
    return stripe.customers
      .create({
        email: token.email,
        source: token.id
      })
      .then(customer => {
        stripe.charges.create(
          {
            amount: product.price * 100,
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
            shipping: {
              name: token.card.name,
              address: {
                country: token.card.address_country
              }
            }
          },
          { idempontencyKey }
        );
      })
      .then(result => res.status(200).json(result))
      .catch(err => console.log(err));
  });