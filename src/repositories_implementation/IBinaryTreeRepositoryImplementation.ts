import { Prompt } from "prompt-sync";
import { Node } from "../entities/Node";
import { IBinaryTreeRepository } from "../repositories/IBinaryTreeRepository";

export class IBinaryTreeRepositoryImplementation implements IBinaryTreeRepository {
  private isBuilding: boolean = true;

  build(prompt: Prompt): Node {
    const rootValue = prompt("Choose The Root Value: ");
    const rootNode = new Node(+rootValue);
    this.buildRecursive(rootNode, prompt);
    return rootNode;
  }

  private buildRecursive(currentNode: Node, prompt: Prompt): void {
    while (this.isBuilding) {
      console.log("1 - Add Node");
      console.log("2 - Finish Adding");

      let answer: string;
      do {
        answer = prompt("Answer: ");
      } while (!["1", "2"].includes(answer));

      if (answer === "1") {
        const leftNodeValue = prompt("Left Node Value: ");
        const rightNodeValue = prompt("Right Node Value: ");

        const leftNode = new Node(+leftNodeValue);
        const rightNode = new Node(+rightNodeValue);

        currentNode.left = leftNode;
        currentNode.right = rightNode;

        this.buildRecursive(leftNode, prompt);
        this.buildRecursive(rightNode, prompt);
      }

      if (answer === "2") this.isBuilding = false;
    }
  }

}
