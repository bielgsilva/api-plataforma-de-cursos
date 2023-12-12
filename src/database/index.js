const knex = require('knex')({
    client: 'pg',
    connection: "postgres://grbodgmn:ygn0--UiQCt8BRKnSqdKwc1CJe_Yuma5@tuffi.db.elephantsql.com/grbodgmn",
})

module.exports = knex