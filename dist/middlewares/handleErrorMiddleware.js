export default function handleErrorMiddleware(error, req, res, next) {
    if ((error === null || error === void 0 ? void 0 : error.type) === "user") {
        res.status(error.status).send(error.message);
    }
    else {
        console.log(error);
        res.sendStatus(500);
    }
}
