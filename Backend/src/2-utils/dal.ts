import mysql from "mysql";
import appConfig from "./app-config";

// Create a pool of connection to MySQL:
const connection = mysql.createPool({
    host: appConfig.host, // Hostname of the MySQL server
    user: appConfig.user, // Username to authenticate with the server
    password: appConfig.password, // Password to authenticate with the server
    database: appConfig.database // Name of the MySQL database to connect to
});

function execute(sql: string, values?: any[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err); // If an error occurred during the query execution, reject the Promise with the error
                return;
            }
            resolve(result); // If no error occurred, resolve the Promise with the query result
        });
    });
}

export default {
    execute
};
