import { Node } from "../entities/Node";

export interface IOrderService {
    preOrder(root: Node | null): number[];
    inOrder(root: Node | null): number[];
    postOrder(root: Node | null): number[];
}