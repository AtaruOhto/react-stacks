/// <reference types="node" />
declare global {interface Window {devToolsExtension: any;}}

import { PageScriptLoader } from "utils/routeScriptExecutor/routeScriptExecutor";
import { pageScripts } from 'config/page'
const htmlElem = document.querySelector('html');

if(htmlElem) {
    const htmlClassList = htmlElem.classList;
    const callback = new PageScriptLoader(htmlClassList, pageScripts).loadPageScript();
    if(callback) { callback(); }
}
