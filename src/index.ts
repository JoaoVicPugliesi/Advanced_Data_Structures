import { Root } from "./entities/ts/Root";
import PromptSync from "prompt-sync";
import { IRootRepositoryImplementation } from "./repositories_implementation/IRootRepositoryImplementation";
const prompt = PromptSync()

const iRootRepository = new IRootRepositoryImplementation();
const root = new Root(iRootRepository, prompt);

const tree = root.make();

console.log(tree);