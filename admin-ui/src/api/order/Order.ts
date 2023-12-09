import { Product } from "../product/Product";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  paymentintent: string | null;
  paymentStatus: boolean | null;
  price: number | null;
  products?: Array<Product>;
  satus: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
