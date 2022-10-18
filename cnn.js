const pgPromise= require("pg-promise")
const configLocal = {
    host : "localhost",
    port : "5432",
    database: "libreria",
    user: "postgres",
    password : "miguel"

}
const config={
    host : "dpg-cct44dqen0hinulienq0-a.oregon-postgres.render.com",
    port : "5432",
    database: "libreria",
    user: "brguamanc",
    password : "QncpuDMCSz2bjdGWXlew33wNtuZCLcTF",
    ssl: true
}
const pgp = pgPromise({})
const db = pgp(config)
exports.db=db
