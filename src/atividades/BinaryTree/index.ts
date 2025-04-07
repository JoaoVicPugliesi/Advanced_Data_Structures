import PromptSync from "prompt-sync";
import { IOrderServiceImplementation } from "../../services_implementation/IOrderServiceImplementation";
import { IBinaryTreeRepositoryImplementation } from "../../repositories_implementation/IBinaryTreeRepositoryImplementation";
import { BinaryTree } from "../../entities/BinaryTree";

const iBinaryTreeRepository = new IBinaryTreeRepositoryImplementation();
const iOrderService = new IOrderServiceImplementation();
const prompt = PromptSync();
const binaryTree = new BinaryTree(iBinaryTreeRepository, iOrderService, prompt);

export { binaryTree };