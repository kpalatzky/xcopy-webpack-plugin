import { Compiler, Plugin, compilation } from "webpack";
import log, { Logger } from 'webpack-log';
export interface Pattern {
}
export interface Options {
}
export class CopyPlugin extends Plugin {
    protected name: string = "xcopy-webpack-plugin";
    protected logger: Logger;
    constructor(patterns: Pattern[], options: Options) {
        super();

        // init logger
        this.logger = log({
            name: this.name
        });
    }
    apply(compiler: Compiler): void {
        compiler.hooks.emit.tapPromise(this.name, this.onEmit);
        compiler.hooks.afterEmit.tapPromise(this.name, this.onAfterEmit);
    }

    protected onEmit = async (compilation: compilation.Compilation): Promise<void> => {

    }

    protected onAfterEmit = async (compilation: compilation.Compilation): Promise<void> => {

    }
}
