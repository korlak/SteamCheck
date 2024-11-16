import {body} from "express-validator";

export const registerValidation = [
    body('email', 'Неправильний формат почти').isEmail(),
    body('password', 'Пароль повинен складатись з 6-32 символів').isLength({min: 6, max: 32}),
    body('fullName', 'Укажіть ім\'я').isLength({min: 3, max: 32}),
    body('avatarUrl', 'Неправильне посилання на зображення').optional().isURL(),
]

export const loginValidation = [
    body('email', 'Неправильний формат почти').isEmail(),
    body('password', 'Пароль повинен складатись з 6-32 символів').isLength({min: 6, max: 32}),
]

export const postCreateValidation = [
    body('title', 'Введіть заголовок статті').isLength({min:3}).isString(),
    body('text', 'Введіть текс').isLength({min: 3}).isString(),
    body('tags', 'Неправильний формат').optional().isString(),
    body('imageUrl', 'Неправильне посилання на зображення').optional().isString(),
]