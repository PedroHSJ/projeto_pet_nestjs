import * as yup from 'yup';

export const EstablishmentSchema = yup.object().shape({
    name: yup.string().required(),
    cnpj: yup.string().required(),
});
