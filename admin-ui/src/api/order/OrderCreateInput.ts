import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  paymentintent?: string | null;
  paymentStatus?: boolean | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  satus?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
