interface INode {
    value: number,
    left: INode | null,
    right: INode | null
}

export class Node implements INode {

    public readonly value: number;
    public readonly left: INode | null;
    public readonly right: INode | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}