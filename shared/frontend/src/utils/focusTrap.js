// src/utils/focusTrap.js
import { useEffect } from 'react';

const SELECTOR =
  'a[href],button:not([disabled]),input:not([disabled]),textarea,select,[tabindex]:not([tabindex="-1"])';

export default function useFocusTrap(ref, active = true) {
  useEffect(() => {
    if (!active || !ref.current) return;

    const container = ref.current;
    const els = [...container.querySelectorAll(SELECTOR)];
    if (!els.length) return;

    const first = els[0];
    const last = els[els.length - 1];
    const prevFocus = document.activeElement;

    first.focus();

    const onKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (prevFocus && prevFocus.focus) prevFocus.focus();
    };
  }, [active, ref]);
}