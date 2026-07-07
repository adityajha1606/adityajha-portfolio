// Shared style fragments for the /stack page. Kept in one place so the
// hard-edged focus treatment (no blurry browser default) stays identical
// across every interactive element.

export const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-blue focus:outline-none'

export const TRANSITION_FAST =
  'transition-all duration-150 motion-reduce:transition-none motion-reduce:duration-0'
