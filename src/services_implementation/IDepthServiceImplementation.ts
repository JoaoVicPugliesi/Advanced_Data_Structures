import { Node } from "../entities/Node";
import { IDepthService } from "../services/IDepthService";

export class IDepthServiceImplementation implements IDepthService {
  maxDepth(root: Node | null): number {
    if(root === null) return 0;
    if(root?.left === null && root.right === null) return root.value;
    const maxChild = Math.max(this.maxDepth(root?.left), this.maxDepth(root?.right));
    const result: number = root.value + maxChild;
    console.log(result);
    return result;

  }
}
