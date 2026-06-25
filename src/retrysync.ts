
// Type exports for consumers
// Add specific types as needed
/**
 * retrySync<T>
 */
export function retrySync<T>(
  fn: () => T,
  options: { maxAttempts?: number; baseDelay?: number } = {}
): T {
  const { maxAttempts = 3, baseDelay = 1000 } = options;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try { return fn(); }
    catch (err) {
      if (attempt === maxAttempts) throw err;
    }
  }
  throw new Error("Unreachable");
}
