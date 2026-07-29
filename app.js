// modal-rescue — the fixed side.
// The broken side is wired inline in the HTML on purpose, defects and all.

const openFixed = document.getElementById("open-fixed");
const dialog = document.getElementById("fixed-modal");

// The broken opener: just flips display. No focus move, no trap, no Escape.
document.getElementById("open-broken").addEventListener("click", () => {
  document.getElementById("broken-modal").style.display = "grid";
});

// The fixed opener: showModal() gives us focus trapping, Escape handling,
// aria-modal semantics, and ::backdrop — all from the platform.
openFixed.addEventListener("click", () => {
  dialog.showModal();
});

// Focus restoration: when the dialog closes (any way — Escape, button),
// return focus to the control that opened it. `close` fires for all paths.
dialog.addEventListener("close", () => {
  openFixed.focus();
});

document.getElementById("fixed-close").addEventListener("click", () => dialog.close());
document.getElementById("fixed-subscribe").addEventListener("click", () => {
  // Real apps would validate + submit here.
  dialog.close("subscribed");
});

// Light-dismiss: clicking the backdrop closes. The dialog element itself
// receives the click when the backdrop is hit, so we check the target.
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});
