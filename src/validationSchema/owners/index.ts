import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  ownership_percentage: yup.number().integer().required(),
  investment_amount: yup.number().integer().required(),
  shares_owned: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
