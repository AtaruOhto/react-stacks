import _ from 'lodash';

interface IPageScriptDef {
    selectors: Array<string>,
    callback: Function
}

export interface IPageScriptDefs extends Array<IPageScriptDef>{}

export class PageScriptLoader {
    constructor(private hookClassList: any, private pageScriptsDefs: IPageScriptDefs) {}

    public loadPageScript = (): Function => {
        for(let def of this.pageScriptsDefs) {
            if(this.checkIsDefMatchClass(def)) return def.callback
        }
        return () => { return null }
    };

    public checkIsDefMatchClass(def: IPageScriptDef): boolean {
        return _.intersection(this.hookClassList, def.selectors).length > 0
    }
}
