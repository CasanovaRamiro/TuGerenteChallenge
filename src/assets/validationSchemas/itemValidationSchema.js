import * as yup from 'yup'

export const itemValidationSchema = yup.object().shape({
    name:yup
    .string('El Nombre debe contener letras')
    .min(4, 'Minimo 4 caracteres')
    .required('El Nombre un campo obligatorio'),
    socialReason:yup
    .string('La Razón Social debe contener letras')
    .required('La Razón Social un campo obligatorio'),
    phone:yup
    .number('Este campo debe ser un numero')
    .positive('Este campo debe ser un numero positivo')
    .integer('Este campo debe ser un numero entero')
    .required('El Teléfono un campo obligatorio'),
    nit:yup
    .number('Este campo debe ser un numero')
    .positive('Este campo debe ser un numero positivo')
    .integer('Este campo debe ser un numero entero')
    .required('El N.I.T. un campo obligatorio'),
    code:yup
    .string('El Código debe contener letras')
    .required('El Código un campo obligatorio')
})