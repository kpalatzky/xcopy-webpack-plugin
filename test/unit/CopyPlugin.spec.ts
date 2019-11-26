import { CopyPlugin } from "@/CopyPlugin";

test("Create instance", () => {
	var instance = new CopyPlugin([]);
	expect(instance instanceof CopyPlugin).toBe(true);
});
