import { Component, Input } from '@angular/core';
import { TreeNode } from 'src/app/models/tree-node';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  @Input() node?: TreeNode;
  
  expanded? = false;
  
  toggleNode() {
    this.expanded = !this.expanded;
  }
}