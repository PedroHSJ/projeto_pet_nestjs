import * as yup from 'yup';

export const EstabelecimentoSchema = yup.object().shape({
    nome: yup.string().required(),
    cnpj: yup.string().min(14).max(14).required(),
    usuarios: yup.array().of(
        yup.object().shape({
            id: yup.string().uuid().required(),
        }),
    ),
});
