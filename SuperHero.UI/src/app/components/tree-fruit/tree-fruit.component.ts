import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { fruitNodes } from 'src/app/data/fruits';
import { FoodNode } from 'src/app/models/food-node';
import { IFoodFlatNode } from 'src/app/models/ifood-flat-node';

@Component({
  selector: 'app-tree-fruit',
  templateUrl: './tree-fruit.component.html',
  styleUrls: ['./tree-fruit.component.css'],
})
export class TreeFruitComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<IFoodFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = fruitNodes;
  }

  hasChild = (_: number, node: IFoodFlatNode) => node.expandable;
}
