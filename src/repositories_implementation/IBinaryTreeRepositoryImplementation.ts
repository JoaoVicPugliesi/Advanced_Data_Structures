import { Prompt } from 'prompt-sync';
import { Node } from '../entities/Node';
import { IBinaryTreeRepository } from '../repositories/IBinaryTreeRepository';

export class IBinaryTreeRepositoryImplementation implements IBinaryTreeRepository {
  build(prompt: Prompt): Node {
    const rootValue = prompt('Choose The Root Value: ');
    const rootNode = new Node(+rootValue);
    this.buildRecursive(rootNode, prompt);
    return rootNode;
  }

  private buildRecursive(currentNode: Node, prompt: Prompt): void {
    console.log(`Current Node: ${currentNode.value}`);
    
    const leftValue = prompt('Left Node Value (enter to skip): ');
    if (leftValue !== '') {
      const leftNode = new Node(+leftValue);
      currentNode.left = leftNode;
      this.buildRecursive(leftNode, prompt);
    }

    const rightValue = prompt('Right Node Value (enter to skip): ');
    if (rightValue !== '') {
      const rightNode = new Node(+rightValue);
      currentNode.right = rightNode;
      this.buildRecursive(rightNode, prompt);
    }
  }
}
