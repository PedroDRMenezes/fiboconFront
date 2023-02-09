export interface FoodNode {
  name: string;
  children?: FoodNode[];
  value?: string;
}

export interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
