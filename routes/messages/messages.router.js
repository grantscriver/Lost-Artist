const express = require("express");
const { getPublicMessage, getProtectedMessage } = require("./messages.service");
const { checkJwt } = require("../../authz/check-jwt");


const messagesRouter = express.Router();

messagesRouter.get("/public-message", (req, res) => {
    const message = getPublicMessage();
    res.status(200).send(message);
});

messagesRouter.get("/protected-message", checkJwt, (req, res) => {
    const message = getProtectedMessage();
    res.status(200).send(message);
})

module.exports = {
    messagesRouter,
}; 