const connection = require("../../config/mysql");
const {
    validateDate, validateEmail,
    validateFields, validateImageUrl,
    validatePanCard
} = require("../../utility/validationFunctions");



const createCustomer = (req, res) => {




    console.log(req.body);
    if (!validateFields(req.body))
        return res.json(400, {
            error: "All fields are mandatory"
        })


    if (!validatePanCard(req.body.pan_number)) {
        return res.json(400, {
            error: "Enter a valid pan number of 10 characters(Capital aplhabets)"
        })
    }


    if (!validateEmail(req.body.email)) {
        return res.json(400, {
            error: "Enter a valid email address"
        })

    }

    if (!validateImageUrl(req.body.profile_image)) {
        return res.json(400, {
            error: "Enter a valid image url"
        })

    }

    if (validateDate(req.body.dob) === "invalidDate") {
        return res.json(400, {
            error: "Enter a valid date in yyyy-mm-dd or mm-dd-yyyy format"
        })
    }

    if (validateDate(req.body.dob) === "tooYoung") {
        return res.json(400, {
            error: "You must be atleast 18 years old"
        })
    }












    connection.query(`select count(*) from customer`, function (err, rs) {
        console.log(rs);

        const insertData = ` insert into customer values("${rs[0]["count(*)"] + 1}","${req.body.first_name}","${req.body.pan_number}","${validateDate(req.body.dob)}","${req.body.gender}","${req.body.email}","${req.body.profile_image}") `;

        connection.query(insertData, function (err, result) {

            console.log(result, err)
            if (!err)
                return res.json(200, {
                    success: "Customer record has been created"

                })

            if (err && err.errno == 1062) {

                if (err.sqlMessage.includes("email"))
                    return res.json(400, {
                        error: "Email already registered"

                    })

                if (err.sqlMessage.includes("pan"))
                    return res.json(400, {
                        error: "Pan already registered"

                    })

                    if (err.sqlMessage.includes("profile"))
                    return res.json(400, {
                        error: "Profile image already inuse"

                    })

                    

                }


                else{

                   
                  return  res.json(500,{
                    error: "Internal Server Error"
    
                })
    
                }
        })

    })




}


module.exports = createCustomer;