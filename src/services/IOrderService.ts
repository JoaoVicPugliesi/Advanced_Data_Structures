import { Node } from "../entities/Node";

export interface IOrderService {
    preOrder(node: Node): void;
    inOrder(node: Node): void;
    postOrder(node: Node): void;
}