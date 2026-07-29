# modal-rescue

**The problem:** the div-soup modal is everywhere in production — opens on click, looks fine, and is completely broken for keyboard and screen reader users. Focus stays behind the overlay, Escape does nothing, and assistive tech doesn't even know a dialog opened.

**The solution:** the exact same newsletter modal implemented twice on one page. Left: the broken version you've seen a hundred times. Right: the fixed version using the native `<dialog>` element. `AUDIT.md` walks through every defect and its fix.

## Use it

Open `index.html`. Then put your mouse away:

1. `Tab` to the first "Open (broken)" button, press `Enter`.
2. Keep tabbing — notice focus escapes behind the modal into the page. Press `Escape` — nothing.
3. Now try the fixed version. Focus moves in, stays in, `Escape` closes, and focus returns to the button that opened it.

## How it's built

The fixed version leans on the platform: `<dialog>` + `showModal()` gives focus trapping, `Escape` handling, `aria-modal`, and top-layer rendering for free. The only hand-written parts are focus restoration and scroll locking — both documented in `AUDIT.md`.

## Contribute

- Add `prefers-reduced-motion` handling for the open/close animation
- Add the third common variant: an accessible modal WITHOUT `<dialog>` (for teams stuck supporting old WebViews) using a focus-trap utility
- Write a Playwright test asserting focus is trapped and restored

---

Scaffolded by an automated weekly pipeline, then refined by hand — see the factory repo for how it works.
