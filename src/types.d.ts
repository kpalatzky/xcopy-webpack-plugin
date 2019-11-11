declare module "webpack-log" {
    interface Options {
        name: string
    }

    type logFn = () => void;

    export interface Logger {
        info: logFn,
        warn: logFn,
        error: logFn,
        debug: logFn,
        trace: logFn,
        silent: logFn
    }

    const log: (options: Options) => Logger;

    export default log;
}