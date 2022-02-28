const errorHandle = (err, req, res, next) => {
    let statusCode = err.code || 500;
    let msg =err.msg || "Internal Server Error"
    res.status(statusCode).send(msg);
}
module.exports = { errorHandle }