
import {
    validateDate, validateEmail,
    validateFields, validateImageUrl,
    validatePanCard
} from "../../utility/validationFunctions"

const createCustomer = () => {

    app.post("/create_customer", function (req, res) {

        console.log(req.body);
        if (!validateFields(req.body))
            return res.json({
                error: "All fields are mandatory"
            })


        if (!validatePanCard()) {
            return res.json({
                error: "Enter a valid pan number"
            })
        }


        if (!validateEmail()) {
            return res.json({
                error: "Enter a valid email address"
            })

        }

        if (!validateImageUrl()) {
            return res.json({
                error: "Enter a valid image url"
            })

        }




        connection.query(`select count(*) from customer`, function (err, rs) {
            console.log(rs);

            connection.query(` insert into customer values("${rs[0]["count(*)"] + 1}","${req.body.first_name}","${req.body.pan_number}","${date()}","${req.body.gender}","${req.body.email}","${req.body.profile_image}") `, function (err, result) {

                console.log(result, err)
                res.json({
                    "done": true

                })
            })

        })

    })


}


module.exports = createCustomer;