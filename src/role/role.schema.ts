import * as yup from 'yup';

export const RoleSchema = yup.object().shape({
    nome: yup.string().required(),
});
