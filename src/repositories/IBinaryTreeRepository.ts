import { Prompt } from "prompt-sync";
import { Node } from "../entities/Node";

export interface IBinaryTreeRepository {
    build(prompt: Prompt): Node;
}