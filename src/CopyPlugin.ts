import { compilation, Compiler, Plugin } from "webpack";
import log, { Logger } from "webpack-log";
// import log, { Logger } from "webpack-log";


export class CopyPlugin implements Plugin {
	protected name: string;

	protected patterns: any[];

	protected options: any;

	protected logger: Logger;

	constructor(patterns: any[], options?: any) {
		this.patterns = patterns || [];
		this.options = options || {}
		this.name = "xcopy-webpack-plugin";

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
