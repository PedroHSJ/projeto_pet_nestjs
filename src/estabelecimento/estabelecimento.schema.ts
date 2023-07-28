import * as yup from 'yup';
import { CPNJ_REQUIRED, NOME_REQUIRED } from './constants';

export const EstabelecimentoSchema = yup.object().shape({
    nome: yup.string().required(NOME_REQUIRED),
    cnpj: yup.string().min(14).max(14).required(CPNJ_REQUIRED),
});
