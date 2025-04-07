import { IBinaryTreeRepository } from '../repositories/IBinaryTreeRepository';
import { Prompt } from "prompt-sync";
import { Node } from "./Node";
import { IOrderService } from '../services/IOrderService';

export class BinaryTree {
  private isOrdering: boolean = true;
  constructor(
    private readonly iBinaryTreeRepository: IBinaryTreeRepository,
    private readonly iOrderService: IOrderService,
    private readonly prompt: Prompt
  ) {}

  builder() {
    const binaryTree: Node = this.iBinaryTreeRepository.build(this.prompt);
    
    while(this.isOrdering) {

      let order = '';
      console.log('Choose a Ordering: ');
      console.log('1 - PreOrder: ');
      console.log('2 - InOrder: ');
      console.log('3 - PostOrder: ');
      console.log('4 - Finish Program: ');

      do {
        order = this.prompt('Order: ');
      } while(!(['1', '2', '3'].includes(order)));

      if(order === '1') this.iOrderService.preOrder(binaryTree);
      if(order === '2') this.iOrderService.inOrder(binaryTree);
      if(order === '3') this.iOrderService.postOrder(binaryTree);
      if(order === '4') this.isOrdering = false;

    }
  }
  
}
