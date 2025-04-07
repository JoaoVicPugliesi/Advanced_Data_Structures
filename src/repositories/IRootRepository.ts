import { Prompt } from "prompt-sync";
import { Node } from "../entities/ts/Node";

export interface IRootRepository {
    build(prompt: Prompt): Node;
}