import { NextFunction, Request, Response } from "express";
import { RouteNotFoundErrorModel } from "../4-models/error-models";

function routeNotFound(request: Request, response: Response, next: NextFunction) {

    const err = new RouteNotFoundErrorModel(request.originalUrl);

    next(err); // Passes the error to the next middleware or default error handler
}

export default routeNotFound;
