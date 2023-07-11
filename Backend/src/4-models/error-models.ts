// Represents a generic error with a message and status
export class ErrorModel {
    public constructor(public message: string, public status: number) { }
}

// Represents an error when a route is not found
export class RouteNotFoundErrorModel extends ErrorModel {
    public constructor(route: string) {
        super(`Route ${route} not exist`, 404); // Calls the parent class constructor with a formatted error message and HTTP status code
    }
}

// Represents an error when a resource is not found
export class ResourceNotFoundErrorModel extends ErrorModel {
    public constructor(id: number) {
        super(`id ${id} not exist`, 404); // Calls the parent class constructor with a formatted error message and HTTP status code
    }
}

// Represents a validation error
export class ValidationErrorModel extends ErrorModel {
    public constructor(message: string) {
        super(message, 400); // Calls the parent class constructor with the provided error message and HTTP status code
    }
}

// Represents an unauthorized access error
export class UnauthorizedErrorModel extends ErrorModel {
    public constructor(message: string) {
        super(message, 401); // Calls the parent class constructor with the provided error message and HTTP status code
    }
}
