import server from "./server.js";
import { connect } from "./database.js";
import colors from "colors";
connect();

server.start({ port: 4000 }, ({ port } ) => {
    console.log(`Server is running  on port: ${port}`.blue.underline)
});
