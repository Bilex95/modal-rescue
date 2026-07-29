# Audit: what's wrong with the broken modal

Each defect below maps to the relevant WCAG 2.1 criterion and its fix in the ✅ version.

## 1. Focus never moves into the dialog
**Defect:** opening the modal leaves focus on the trigger button; a screen reader user hears nothing happen. 
**WCAG:** 2.4.3 Focus Order. 
**Fix:** `dialog.showModal()` moves focus into the dialog automatically.

## 2. Focus is not trapped
**Defect:** tabbing walks into the page behind the overlay — you can "use" links you can't see. 
**WCAG:** 2.4.3 Focus Order, 2.1.2 No Keyboard Trap (inverted: modals SHOULD trap while open). 
**Fix:** native `<dialog>` in modal mode traps focus in the top layer.

## 3. Escape doesn't close it
**Defect:** keyboard users have no exit; the only close control is a click target. 
**WCAG:** 2.1.1 Keyboard. 
**Fix:** `showModal()` wires Escape by default; the `close` event handles cleanup.

## 4. "Buttons" are spans
**Defect:** `<span onclick>` is not focusable, has no role, no Enter/Space activation. 
**WCAG:** 4.1.2 Name, Role, Value. 
**Fix:** real `<button>` elements.

## 5. No dialog semantics
**Defect:** assistive tech sees a div appear — no `role="dialog"`, no `aria-modal`, no accessible name. 
**WCAG:** 4.1.2. 
**Fix:** `<dialog aria-labelledby>` provides role and name; modal state is implicit.

## 6. The email input has no label
**Defect:** placeholder-as-label disappears on input and isn't reliably announced. 
**WCAG:** 3.3.2 Labels or Instructions, 1.3.1 Info and Relationships. 
**Fix:** a real `<label for>`.

## 7. Focus is not restored on close
**Defect:** after closing, focus is lost to `<body>` — keyboard users restart from the top of the page. 
**WCAG:** 2.4.3. 
**Fix:** listening to the dialog's `close` event and refocusing the trigger.

## 8. Background still scrolls
**Defect:** the page scrolls behind the overlay; disorienting at high zoom. 
**Fix:** `body:has(dialog[open]) { overflow: hidden; }`.
