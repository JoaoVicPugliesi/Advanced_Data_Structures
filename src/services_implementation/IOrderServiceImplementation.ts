import { Node } from "../entities/Node";
import { IOrderService } from "../services/IOrderService";

export class IOrderServiceImplementation implements IOrderService {
  preOrder(root: Node | null ): number[]  {
    if (!root) return [];

    const leftValues = this.preOrder(root.left);
    const rightValues = this.preOrder(root.right);

    const result = [root.value, ...leftValues, ...rightValues];

    console.log(result.filter((i) => !Number.isNaN(i))); 

    return result;
  }

  inOrder(root: Node | null): number[]  {
    if(root === null) return [];
    
    const leftValues = this.inOrder(root.left);
    const rightValues = this.inOrder(root.right);

    const result = [...leftValues, root.value, ...rightValues];

    console.log(result.filter((i) => !Number.isNaN(i))); 

    return result;
  }

  postOrder(root: Node | null): number[] | [] {
    if(root === null) return [];
    
    const leftValues = this.postOrder(root.left);
    const rightValues = this.postOrder(root.right);

    const result = [...leftValues, ...rightValues, root.value];

    console.log(result.filter((i) => !Number.isNaN(i)));
    return result;
  }
}
