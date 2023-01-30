"use strict";
require("dotenv").config();

const yelp = require("yelp-fusion");

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = process.env.APIKEY || "<your-api-key>";

// search for k number of businesses using term and location(required);
const searchRequest = {
  term: "boba",
  location: "westminster, ca",
};

const client = yelp.client(apiKey);

function getBusinesses(k) {
  client
    .search(searchRequest)
    .then((response) => {
      for (let i = 0; i < k; i++) {
        const result = response.jsonBody.businesses[i];
        // const prettyJson = JSON.stringify(result, null, 4);
        const resultName = JSON.stringify(result.name, null, 4);
        const resultID = JSON.stringify(result.id, null, 4);
        console.log(resultName, resultID);
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
// getBusinesses(5);

// search business by ID

// example business id
let businessID = "I-cIe7nJlsdIhjH8lNJ7_w";

const sdk = require("api")("@yelp-developers/v1.0#2hsur2ylbank95o");

sdk.auth("Bearer " + process.env.APIKEY);
sdk
  .v3_business_info({ business_id_or_alias: businessID })
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err));
