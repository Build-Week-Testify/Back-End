const db = require("../data/dbConfig.js");

module.exports = {
    add,
    find,
    findBy,
    findById
};

function find() {
    return db("user").select("id", "username", "name", "email", "isTeacher");
}

function findBy(filter) {
    return db("user").where(filter);
}

async function add(user) {
    const [id] = await db("user").insert(user, "id");

    return findById(id);
}

function findById(id) {
    return db("user")
        .where({ id })
        .first();
}