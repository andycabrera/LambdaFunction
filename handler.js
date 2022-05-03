'use strict';

const { findTwoBeers } = require('./services/beers')

module.exports.findTwoBeers = async (event, context, callback) => {
  const body = JSON.parse(event.body);

  try {
    if (body.beers instanceof Array && !isNaN(body.target)) {
      const index = findTwoBeers(body.beers, body.target);

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(
          {
            index
          })
      })

    } else {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify(
          {
            error: `Invalid inputs.`
          })
      })
    }

  } catch (error) {
    console.log(error)
    callback(null, {
      statusCode: 400,
      body: JSON.stringify(
        {
          error: error.message
        })
    })
  }
};
