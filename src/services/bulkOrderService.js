// Bulk order / inquiry submission service.
//
// There is no backend today, so this resolves locally after a short
// delay to simulate a network round trip and give the UI a realistic
// loading/success flow. When a real API is available, replace the
// body of `submitBulkOrder` with a fetch()/POST call — the function
// signature and return contract (Promise<{ ok, referenceId }>) can
// stay the same, so no calling code needs to change.
export function submitBulkOrder(formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const referenceId = `AVN-${Date.now().toString().slice(-6)}`;
      resolve({ ok: true, referenceId, data: formData });
    }, 900);
  });
}
