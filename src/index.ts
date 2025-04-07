import { BinaryTree } from "./entities/BinaryTree";
import PromptSync from "prompt-sync";
import { IBinaryTreeRepositoryImplementation } from "./repositories_implementation/IBinaryTreeRepositoryImplementation";
const prompt = PromptSync()

const iRootRepository = new IBinaryTreeRepositoryImplementation();
const root = new BinaryTree(iRootRepository, prompt);

root.builder();

