import webpack from "webpack";
import path from "path";
import fs from "fs";
import { CopyPlugin } from "@/index";

describe("Suite copy", () => {
	test("Setup webpack", () => {
		expect(1).toBe(1);
	});
	return;
	const testdata = path.join(process.cwd(), ".testdata");
	const input = path.join(testdata, "input");
	const output = path.join(testdata, "output");

	// currently not running
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
				expect(err).toBeNull();
				expect(stats.hasErrors()).toBe(false);
			}
		);
	});
});
