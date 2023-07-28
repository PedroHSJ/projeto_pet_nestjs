import { Role } from 'src/enums/role.enum';
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
    role: yup
        .object()
        .shape({
            nome: yup.string().oneOf(Object.values(Role)).required(),
        })
        .required(),
});
