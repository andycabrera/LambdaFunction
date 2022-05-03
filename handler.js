'use strict';

const { findTwoBeers } = require('./services/beers')

module.exports.findTwoBeers = async (event) => {
  const body = JSON.parse(event.body);

  try {
    if (body.beers instanceof Array && !isNaN(body.target)) {
      const index = findTwoBeers(body.beers, body.target);

      return {
        statusCode: 200,
        headers: {
          "content-type":"application/json; charset=utf-8"},
        body: JSON.stringify(
          { index },
          null,
          2
        )
      }

    } else {
      return {
        statusCode: 400,
        headers: {
          "content-type":"application/json; charset=utf-8"},
        body: JSON.stringify(
          { error: `Invalid inputs.` },
          null,
          2
        )
      }
    }

  } catch (error) {
    console.log(error)
    return {
      statusCode: 400,
      headers: {
        "content-type":"application/json; charset=utf-8"},
      body: JSON.stringify(
        { error: error.message },
        null,
        2
      )
    }
  }
};
