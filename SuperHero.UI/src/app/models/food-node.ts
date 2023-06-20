import { IFoodNode } from './ifood-node';

export class FoodNode implements IFoodNode {
  name: string;
  children?: IFoodNode[];
}
