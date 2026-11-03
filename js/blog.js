// Copy buttons on code blocks.
document.querySelectorAll("pre .copy").forEach((b) =>
  b.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(b.previousElementSibling.textContent);
      b.textContent = "Copied";
    } catch {
      b.textContent = "Select and copy";
    }
    setTimeout(() => (b.textContent = "Copy"), 1500);
  })
);
