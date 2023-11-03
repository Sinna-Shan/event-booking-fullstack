const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

const graphiqlSchema = require('./graphql/schema/index');
const graphiqlResolvers = require('./graphql/resolvers/index');

const event = require("./models/event");


const app = express();

app.use(bodyParser.json());



app.use(
  "/graphql",
  graphqlHttp.graphqlHTTP({
    schema:graphiqlSchema,
    rootValue: graphiqlResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://noahluthofficial:${process.env.MONGO_PASSWORD}@event-booking.jcnjpe3.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
// sloSQvsbTQmxKRuS
