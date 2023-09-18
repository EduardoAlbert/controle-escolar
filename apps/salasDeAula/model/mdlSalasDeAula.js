const db = require("../../../database/databaseconfig");

const GetAllSalasDeAula = async () => {
    return (
        await db.query(
            "SELECT * FROM salasdeaula where removido = false ORDER BY descricao ASC"
        )
    ).rows;
};

const GetSalaDeAulaByID = async (salaDeAulaIDPar) => {
    return (
        await db.query(
            "SELECT * FROM salasdeaula WHERE saladeaulaid = $1 and removido = false ORDER BY descricao ASC",
            [salaDeAulaIDPar]
        )
    ).rows;
};

const InsertSalasDeAula = async (registroPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "INSERT INTO salasdeaula " + "values(default, $1, $2, $3, $4)",
                [
                    registroPar.descricao,
                    registroPar.localizacao,
                    registroPar.capacidade,
                    registroPar.removido,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|insertSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

const UpdateSalasDeAula = async (registroPar) => {
    let linhasAfetadas;
    let msg = "ok";
    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE salasdeaula SET " +
                    "descricao = $2, " +
                    "localizacao = $3, " +
                    "capacidade = $4, " +
                    "removido = $5 " +
                    "WHERE saladeaulaid = $1",
                [
                    registroPar.saladeaulaid,
                    registroPar.descricao,
                    registroPar.localizacao,
                    registroPar.capacidade,
                    registroPar.removido,
                ]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|UpdateSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

const DeleteSalasDeAula = async (registroPar) => {
    let linhasAfetadas;
    let msg = "ok";

    try {
        linhasAfetadas = (
            await db.query(
                "UPDATE salasdeaula SET " +
                    "removido = true " +
                    "WHERE saladeaulaid = $1",
                [registroPar.saladeaulaid]
            )
        ).rowCount;
    } catch (error) {
        msg = "[mdlSalasDeAula|DeleteSalasDeAula] " + error.detail;
        linhasAfetadas = -1;
    }

    return { msg, linhasAfetadas };
};

module.exports = {
    GetAllSalasDeAula,
    GetSalaDeAulaByID,
    InsertSalasDeAula,
    UpdateSalasDeAula,
    DeleteSalasDeAula,
};
