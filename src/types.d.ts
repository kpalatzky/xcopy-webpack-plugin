declare module "webpack-log" {
	export type LogLevel =
		| "info"
		| "warn"
		| "error"
		| "debug"
		| "trace"
		| "silent";

	export interface Options {
		name: string;
		level: LogLevel;
	}

	type logFn = (message: string) => void;

	export interface Logger {
		info: logFn;
		warn: logFn;
		error: logFn;
		debug: logFn;
		trace: logFn;
		silent: logFn;
	}

	const log: (options: Options) => Logger;

	export default log;
}
