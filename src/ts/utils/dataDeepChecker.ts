import Joi from 'joi';
import { AddProductToCartDTO, CreateOrderDTO } from '../dto/common.dto';

export const createOrderDeepChecker = (input: Partial<CreateOrderDTO>) => {
  const Schema = Joi.object({
    user_id: Joi.string().required().uuid(),
    cart_id: Joi.string().required().uuid(),
    payment_id: Joi.string().required().uuid(),
    address_id: Joi.string().required().uuid(),
    discount_id: Joi.string(),
  });

  return Schema.validate(input);
};

export const addProductToCartDeepChecker = (
  input: Partial<AddProductToCartDTO>,
) => {
  const Schema = Joi.object({
    user_id: Joi.string().required().uuid(),
    products: Joi.array().items(
      Joi.object({
        product_variant_id: Joi.string().uuid().required(),
        quantity: Joi.number().integer().required(),
      }),
    ),
  });

  return Schema.validate(input);
};
