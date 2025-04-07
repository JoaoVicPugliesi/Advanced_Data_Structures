import { IDepthService } from './../services/IDepthService';
import { IBinaryTreeRepository } from '../repositories/IBinaryTreeRepository';
import { Prompt } from 'prompt-sync';
import { Node } from './Node';
import { IOrderService } from '../services/IOrderService';

export class BinaryTree {
  private isOrdering: boolean = true;
  constructor(
    private readonly iBinaryTreeRepository: IBinaryTreeRepository,
    private readonly iOrderService: IOrderService,
    private readonly prompt: Prompt,
    private readonly iDepthService?: IDepthService
  ) {}

  builder() {
    const root: Node = this.iBinaryTreeRepository.build(this.prompt);

    while (this.isOrdering) {
      let order = '';
      console.log('Choose a Ordering: ');
      console.log('1 - PreOrder: ');
      console.log('2 - InOrder: ');
      console.log('3 - PostOrder: ');
      if (this.iDepthService) console.log('4 - Max Depth: ');
      console.log('5 - Finish Program: ');

      do {
        order = this.prompt('Order: ');
      } while (!['1', '2', '3', '4', '5'].includes(order));

      if (order === '1') this.iOrderService.preOrder(root);
      if (order === '2') this.iOrderService.inOrder(root);
      if (order === '3') this.iOrderService.postOrder(root);
      if (this.iDepthService) {
        if (order === '4') this.iDepthService.maxDepth(root);
      }
      if (order === '5') this.isOrdering = false;
    }
  }
}
