const express = require("express");
const routerApp = express.Router();

const appSalasDeAula = require("../apps/salasDeAula/controller/ctlSalasDeAula");

routerApp.get("/GetAllSalasDeAula", appSalasDeAula.GetAllSalasDeAula);
routerApp.post("/GetSalasDeAulaByID", appSalasDeAula.GetSalaDeAulaByID);
routerApp.post("/InsertSalasDeAula", appSalasDeAula.InsertSalasDeAula);
routerApp.post("/UpdateSalasDeAula", appSalasDeAula.UpdateSalasDeAula);
routerApp.post("/DeleteSalasDeAula", appSalasDeAula.DeleteSalasDeAula);

module.exports = routerApp;
