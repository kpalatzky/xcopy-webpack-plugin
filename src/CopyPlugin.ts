import { compilation, Compiler, Plugin } from "webpack";
import log, { Logger, LogLevel } from "webpack-log";
import * as globby from "globby";

export enum CopyStrategy {
	AUTO = "auto",
	OVERRIDE = "override",
	MERGE = "merge"
}

export interface Pattern {
	from: string | Array<string>;
	to: string;
	context?: string;
	strategy?: "auto" | "default" | "override" | "merge";
	ignore?: Array<string>;
}

export interface Options {
	logLevel?: LogLevel;
	ignore?: Array<string>;
	context?: string;
}

export class CopyPlugin implements Plugin {
	protected name: string;

	protected patterns: Pattern[];

	protected options: Options;

	protected logger: Logger;

	constructor(patterns: Pattern[], options?: Options) {
		this.patterns = patterns || [];
		this.options = options || {};
		this.name = "xcopy-webpack-plugin";

		// init logger
		this.logger = log({
			name: this.name,
			level: this.options.logLevel || "warn"
		});
	}

	/**
	 * Installs this compiler to the given compiler
	 *
	 * @param compiler
	 * Compiler to install this plugin
	 */
	apply(compiler: Compiler): void {
		compiler.hooks.emit.tapPromise(this.name, this.onEmit);
		compiler.hooks.afterEmit.tapPromise(this.name, this.onAfterEmit);
	}

	/**
	 * Event listener for compiler hook emit
	 */
	protected onEmit = async (
		compilation: compilation.Compilation
	): Promise<void> => {
		this.logger.debug("Start emit");
		// preprocess pattern
		// - Create globby
		// -

		// process pattern
		// - collect files
		// - merge files
		// - detect build order
		// - copy / merge files
		this.logger.debug("Finished emit");
	};

	/**
	 * Event listener for compiler hook afterEmit
	 */
	protected onAfterEmit = async (
		compilation: compilation.Compilation
	): Promise<void> => {
		// update file dependencies
	};
}
