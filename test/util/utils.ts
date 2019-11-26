export function context(
	resolver: (resolve: () => void, context: string) => void
) {
	const contextId = createContextId();

	const resolve = () => {};

	resolver(resolve, contextId);
}

function createContext(contextId: string) {}

function createContextId() {
	const charset =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	let result = "";
	for (var i = 0; i < 20; i++) {
		result += charset[Math.floor(Math.random() * charset.length)];
	}
	return result;
}
