import * as yup from 'yup';

export const PetSchema = yup.object().shape({
    nome: yup.string().required(),
    peso: yup.number().required(),
    data_nascimento: yup.date().required(),
    usuario: yup
        .object()
        .shape({
            id: yup.string().required().uuid(),
        })
        .required(),
});
