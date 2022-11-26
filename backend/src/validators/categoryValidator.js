/* eslint-disable quotes */
import { body } from "express-validator";

import { categoryNameValMsg, categoryIdValMsg } from "./validationMsg.js";

export const createCategoryValidator = [
    body("category_name", categoryNameValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

];

export const updateCategoryValidator = [

    body("_id", categoryIdValMsg)
        .notEmpty()
        .isString(),

    body("category_name", categoryNameValMsg)
        .notEmpty()
        .isString()
        .custom((value) => value.length > 1),

];
