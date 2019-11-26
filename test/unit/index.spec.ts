import { CopyPlugin as SourceCopyPlugin } from "@/CopyPlugin";
import { CopyPlugin as IndexCopyPlugin } from "@/index";

test("Correct export", () => {
	expect(SourceCopyPlugin).toBe(IndexCopyPlugin);
});
