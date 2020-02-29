import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Queries = {
    getAll: (param, successCallback, failureCallback) => {

        let sqlQuery = "SELECT * FROM `users`";

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No users.");
            }
        })
    },
    getById: (id, successCallback, failureCallback) => {

        let sqlQuery = `SELECT * FROM users WHERE ID=${id}`;

        db.query(sqlQuery, (err, rows) => {
            if (err) {
                return failureCallback(err);
            }
            if (rows.length > 0) {
                return successCallback(rows);
            } else {
                return successCallback("No matching user");
            }
        })
    },
    getByUsername: (username) => {
        let sqlQuery = `SELECT * FROM users WHERE username="${username}"`;

        return new Promise((resolve, reject) => {
            db.query(sqlQuery, (err, rows) => {
                if (err) reject(err)
                resolve(rows[0])
            })
        })
    },
    register: async (user) => {
        return new Promise((resolve, reject) => {
            let sqlQuery = `INSERT INTO users (id, firstname, lastname, password, username, role_name) VALUES (NULL, "${user.firstname}", "${user.lastname}", "${user.hashedPassword}", "${user.username}", "User");`;

            db.query(sqlQuery, (err, res) => {
                if (err) reject(err)
                resolve(res);
            })
        })
    }
}

export default Queries