export class CreateProductDto {
  title: string;
  description!: string;
  amount: number;
  price: number;
  productOwnerId: string;
}
