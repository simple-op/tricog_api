const connection = require("../../config/mysql");

const getCustomer = (req, res) => {

    console.log(req.email, "sds");
    const fetch = `Select * from customer where email="${req.email}"  `;
    connection.query(fetch, function (err, result) {

        if (!err) {


            if (!result[0]) {

                return res.json(404, {
                    error: "Not a valid Token,put a valid token in Authorization header"

                })

            }

            return res.json(200, {
                success: "Get Request Successful",
                data: result[0]
            })

        }

        else {
            res.json(500, {
                error: "Internal Server error"
            })
        }





    })



}

module.exports = getCustomer;