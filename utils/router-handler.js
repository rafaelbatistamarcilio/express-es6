export const RouterHandler = async (req, res, next) => {
    var err = new Error(`Route ${req.originalUrl} Not Found`);
    err.status = 404;
    next(err);
};