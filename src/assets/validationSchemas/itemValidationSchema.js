import * as yup from 'yup'

export const itemValidationSchema = yup.object().shape({
    name:yup
    .string()
    .min(4)
    .required(),
    socialReason:yup
    .string()
    .required(),
    phone:yup
    .number()
    .positive()
    .integer()
    .required(),
    nit:yup
    .number()
    .positive()
    .integer()
    .required(),
    code:yup
    .string()
    .required()
})