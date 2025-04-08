import { Node } from "../entities/Node";
import { IDepthService } from "../services/IDepthService";

export class IDepthServiceImplementation implements IDepthService {
  maxDepth(root: Node | null): number {
    return this._maxDepth(root);
  }

  private _maxDepth(root: Node | null): number {
    if (root === null) return 0;
    const leftDepth = this._maxDepth(root.left);
    const rightDepth = this._maxDepth(root.right);
    console.log()
    return 1 + Math.max(leftDepth, rightDepth);
  }
}
