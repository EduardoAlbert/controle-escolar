const mdlSalasDeAula = require("../model/mdlSalasDeAula");

const GetAllSalasDeAula = (req, res) =>
    (async () => {
        let registro = await mdlSalasDeAula.GetAllSalasDeAula();
        res.json({ status: "ok", registro: registro });
    })();

const GetSalaDeAulaByID = (req, res) =>
    (async () => {
        const salaDeAulaID = parseInt(req.body.saladeaulaid);
        let registro = await mdlSalasDeAula.GetSalaDeAulaByID(salaDeAulaID);

        res.json({ status: "ok", registro: registro });
    })();

const InsertSalasDeAula = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.InsertSalasDeAula(
            registro
        );
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const UpdateSalasDeAula = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.UpdateSalasDeAula(
            registro
        );
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const DeleteSalasDeAula = (request, res) =>
    (async () => {
        const registro = request.body;
        let { msg, linhasAfetadas } = await mdlSalasDeAula.DeleteSalasDeAula(
            registro
        );
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

module.exports = {
    GetAllSalasDeAula,
    GetSalaDeAulaByID,
    InsertSalasDeAula,
    UpdateSalasDeAula,
    DeleteSalasDeAula,
};
