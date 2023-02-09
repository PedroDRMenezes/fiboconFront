import { Component, OnInit } from '@angular/core';
import { DocsServiceService } from '../../services/docs-service.service';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { FoodNode, ExampleFlatNode } from '../../tree';

@Component({
  selector: 'app-list-of-devices',
  templateUrl: './list-of-devices.component.html',
  styleUrls: ['./list-of-devices.component.scss'],
})
export class ListOfDevicesComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
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

  constructor(private dockService: DocsServiceService) {
    this.dockService.getDocs().subscribe({
      next: (response: any) => {
        console.log(response);
        this.dataSource.data = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
