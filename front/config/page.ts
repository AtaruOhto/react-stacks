import {IPageScriptDefs} from "../utils/routeScriptExecutor/routeScriptExecutor";
import {renderIndex} from "entries/index";

export const pageScripts: IPageScriptDefs = [{
    selectors: ["react-hook-index"],
    callback: () => {
        renderIndex();
    }
}];