import { Node } from "../entities/Node";

export interface IDepthService {
    maxDepth(root: Node | null): number;
}