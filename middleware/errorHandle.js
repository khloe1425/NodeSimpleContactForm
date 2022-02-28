const errorHandle = (err, req, res, next) => {
    console.log("Handle Error")
    let statusCode = err.code || 500;
    let msg =err.msg || "Internal Server Error"
    res.status(statusCode).send(msg);
}
module.exports = { errorHandle }