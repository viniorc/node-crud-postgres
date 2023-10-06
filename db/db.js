// db.js
import postgres from 'postgres'
import 'dotenv/config'

//console.log(process.env);

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project=${ENDPOINT_ID}`
const sql = postgres(URL,{ssl: 'require' }) // will use psql environment variables

export default sql