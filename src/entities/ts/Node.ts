interface INode {
    value: number,
    left: INode | null,
    right: INode | null
}

export class Node implements INode {

    public value: number;
    public left: INode | null;
    public right: INode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

