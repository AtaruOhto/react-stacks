import {} from 'jasmine'
import assert from "power-assert"
import {IPageScriptDefs, PageScriptLoader} from 'utils/routeScriptExecutor/routeScriptExecutor'

const classList1 = ["foo", "bar"];
const classList2 = ["hoge", "fuga"];


const classCallbackSet: IPageScriptDefs = [
    {
        selectors: ["aaa", "bbb"],
        callback: () => { return 10 }
    },
    {
        selectors: ["hoge"],
        callback: () => { return 20 }
    }
];

describe('PageScriptLoader', () => {
    it('PageScriptLoader returns matched function', () => {
        const executor = new PageScriptLoader(classList2, classCallbackSet);
        const isMatch = executor.checkIsDefMatchClass(classCallbackSet[1]);
        const callback = executor.loadPageScript();
        assert(isMatch === true);
        assert(callback() !== 20);
    });

    it('PageScriptLoader returns null', () => {
        const executor = new PageScriptLoader(classList1, classCallbackSet);
        const isMatch = executor.checkIsDefMatchClass(classCallbackSet[0]);
        const callback = executor.loadPageScript();
        assert(isMatch === false);
        assert(callback === null);
    });
});