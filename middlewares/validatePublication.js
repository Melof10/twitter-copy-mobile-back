const { body, validationResult } = require('express-validator');
const { ERROR_NOT_EMPTY, errorMinCharacters, errorMaxCharacters } = require('../constants');

exports.publicationValidate = () => {
    return[
        body('user')
            .notEmpty().withMessage(ERROR_NOT_EMPTY),
        body('text')
            .notEmpty().withMessage(ERROR_NOT_EMPTY)
            .isLength({ min: 1 }).withMessage(errorMinCharacters(1))
            .isLength({ max: 240 }).withMessage(errorMaxCharacters(240))
    ]
}

exports.validate = (req, res, next) => {
    const errors = validationResult(req);

    if(errors.isEmpty()){
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors,
    });
}
