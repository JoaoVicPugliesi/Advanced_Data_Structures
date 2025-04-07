import { IRootRepository } from './../../repositories/IRootRepository';
import { Prompt } from "prompt-sync";
import { Node } from "./Node";

export class Root {
  constructor(
    private readonly iRootRepository: IRootRepository,
    private readonly prompt: Prompt
  ) {}

  make(): Node {
    return this.iRootRepository.build(this.prompt);
  }
  
}
