const formRouter = require('express').Router();
const { Form } = require("../models")
// get all forms
formRouter.get("/", async (req, res, next) => {
    try {
        let result = await Form.findAll();
        console.log(result)
        res.status(200).send(result);
    } catch (error) {
        next({})
    }

})
//get specific form by id
formRouter.get("/:id", async (req, res, next) => {
    try {
        console.log(req);
        let result = await Form.findByPk(req.params.id)
        if (result) {
            res.status(200).send(result);
        } else {
            next({ code: 404, msg: "Form not found !" })
        }
    } catch (error) {
        next({})
    }

})
// add new form
formRouter.post("/", async (req, res, next) => {
    console.log(req.body);
    try {
        await Form.create(req.body).then((newform) => {
            console.log(newform);
        }).then(() => {
            res.status(200).send("success");
        })
    } catch (error) {
        next({ msg: error.errors[0]?.message })
    }
})
// edit exsist form
formRouter.put("/", async (req, res, next) => {
    console.log(req.body);
    try {
        let formInsctance = await Form.findByPk(req.body.formId)
        if (formInsctance) {
            const { fullname, email, issues, description } = req.body
            formInsctance.set({ fullname, email, issues, description });
            await formInsctance.save();
            res.status(200).send("Success");
        } else {
            res.status(404).send("Form not found")
        }
    } catch (error) {
        next({})
    }
})
// delete form
formRouter.delete("/:id", async (req, res, next) => {
    console.log(req.params.id);
    try {
        let rowEffect = await Form.destroy({
            where: {
                formId: req.params.id
            }
        })
        if(rowEffect){
            res.status(200).send(`${rowEffect} row has been effected`)
        }else{
            res.status(404).send("Form not found !")
        }
    } catch (error) {
        next({})
    }
})
module.exports = {
    formRouter
}