import { Node } from "../entities/Node";

export interface IOrderService {
    preOrder(root: Node): number[] | null;
    inOrder(root: Node): number[] | null;
    postOrder(root: Node): number[] | null;
}