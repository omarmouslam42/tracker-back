import { generalFields } from './../../middleware/validation.js';
import  joi  from 'joi';

export const incomeVal = {
    body: joi.object().required().keys({
        title: generalFields.name,
        amount: joi.number().required(),
        type: generalFields.name,
        category: generalFields.name.required(),
        date: generalFields.date,
        description: generalFields.name.required()
        
    }),
    params: joi.object().required().keys({}),
    query: joi.object().required().keys({})
}


export const DeleteIncomeVal = {
    body: joi.object().required().keys({}),
    params: joi.object().required().keys({
        id: generalFields.id
    }),
    query: joi.object().required().keys({})
}
