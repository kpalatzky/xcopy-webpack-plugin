import webpack from "webpack";
import path from "path";
import fs from "fs";
import { CopyPlugin } from "@/index";

describe("Suite copy", () => {
	const testdata = path.join(process.cwd(), ".testdata");
	const input = path.join(testdata, "input");
	const output = path.join(testdata, "output");

	test("Setup webpack", () => {
		webpack(
			{
				plugins: [
					new CopyPlugin([
						{
							from: path.join(input, "dir1/*"),
							to: output
						}
					])
				]
			},
			(err, stats) => {
				// check
				expect(err).toBeUndefined();
				expect(stats.hasErrors()).toBe(false);
				console.log(stats);
			}
		);
	});
});
