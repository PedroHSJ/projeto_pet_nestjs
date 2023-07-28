import * as yup from 'yup';

export const UsuarioSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    estabelecimento: yup
        .object()
        .shape({
            id: yup.string().required().uuid(),
        })
        .required(),
    roles: yup
        .array()
        .of(
            yup
                .object()
                .shape({
                    id: yup.string().required().uuid(),
                })
                .required(),
        )
        .required(),
});
