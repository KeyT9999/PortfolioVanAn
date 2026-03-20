```markdown
# Design System Strategy: The Hospitality-First Portfolio

## 1. Overview & Creative North Star
**The Creative North Star: "The Curated Host"**
This design system moves away from the rigid, boxy nature of traditional portfolios to embrace the fluid, attentive atmosphere of a high-end concierge. For a Professional MC and Marketer, the digital space must mirror the physical one: confident, spacious, and impeccably organized.

We achieve a "High-End Editorial" experience by breaking the standard 12-column grid. Instead, we use **Intentional Asymmetry**—placing text off-center to let professional photography breathe, and **Overlapping Layers**—where typography spills over image containers to create depth. This system isn't just a container for content; it is a demonstration of the user's ability to command a room with subtlety and grace.

---

## 2. Colors
The palette is rooted in warmth and prestige, moving away from "web white" (#FFFFFF) in favor of rich, textured neutrals.

*   **The "No-Line" Rule:** Standard 1px solid borders are strictly prohibited for sectioning. To separate the "About" section from the "Hero," transition from `surface` (#fcf9f3) to `surface-container-low` (#f6f3ed). Let the change in tone define the boundary, creating a seamless, architectural feel.
*   **Surface Hierarchy:** Use the `surface-container` tiers to create a physical sense of "nesting." 
    *   **Base:** `surface`
    *   **Elevated Content:** `surface-container-low`
    *   **Interactive Elements:** `surface-container-highest`
*   **The Glass & Gradient Rule:** For navigation bars or floating action cards, use "Glassmorphism." Apply `surface` at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** For primary CTAs, do not use a flat fill. Apply a subtle linear gradient from `primary` (#775a19) to `primary-container` (#c5a059) at a 135-degree angle. This mimics the shimmer of silk or brushed gold.

---

## 3. Typography
The typography is a dialogue between the "Voice" (Serif) and the "Details" (Sans-serif).

*   **The Voice (Display & Headline):** Using `notoSerif` (Playfair Display equivalent), these levels represent the MC’s stage presence. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for impactful opening statements. 
*   **The Details (Title, Body, Label):** `inter` provides the marketing professional’s clarity. 
    *   **Body-lg:** Use for introductory paragraphs; it provides an editorial "lead-in" feel.
    *   **Label-md:** Use in all-caps with 0.1rem letter-spacing for category headers to create a "luxury brand" tag aesthetic.
*   **Identity Conveyance:** High contrast between a `display-lg` serif and a `label-sm` sans-serif creates an "Editorial Masthead" look, signaling authority and attention to detail.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We reject heavy drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card (the "brightest" paper) onto a `surface-container-low` background. The 1% shift in value creates a sophisticated lift that feels like premium stationery.
*   **Ambient Shadows:** If a floating element is required (e.g., a mobile menu), use a "Soft Glow" shadow: `0 20px 40px rgba(28, 28, 24, 0.05)`. The color is derived from `on-surface`, ensuring the shadow looks like a natural occlusion of light on cream paper.
*   **The "Ghost Border" Fallback:** If a divider is essential for a form or table, use `outline-variant` (#d1c5b4) at **15% opacity**. It should be a suggestion of a line, not a barrier.
*   **Glassmorphism:** Use for floating headers. A background of `surface` at 70% with a `blur(12px)` allows the "gold" of professional photography to bleed through the navigation, keeping the experience integrated.

---

## 5. Components

### Buttons
*   **Primary:** A gradient fill (`primary` to `primary-container`). `rounded-sm` (0.125rem) to maintain a sharp, tailored look. Typography: `title-sm` (Inter, Semibold).
*   **Secondary:** No fill. "Ghost Border" at 20% opacity. On hover, transition to `surface-container-high`.
*   **Tertiary:** Text-only in `primary` color. Use an underline that is 1px thick, offset by 4px, using `outline-variant`.

### Input Fields
*   **Minimalist Line:** Eschew the "box." Use a `surface-container-low` background with a bottom-only border using `outline-variant`.
*   **Focus State:** The bottom border transitions to `primary` (#775a19), and the label (using `label-md`) shifts upwards.

### Cards & Lists
*   **The "No-Divider" Rule:** In lists of "Past Events" or "Marketing Projects," never use a horizontal line. Use `spacing-12` (4rem) of vertical white space to separate items.
*   **Portfolio Cards:** Use `surface-container-lowest` with `rounded-md`. Images should have a subtle `0.5` spacing inner padding to look like "framed" photography.

### Signature Component: The "Hospitality Toast" (Notification/Snackbar)
*   Instead of a harsh pop-up, use a wide, slim bar at the bottom. Background: `inverse-surface` (#31312d), Text: `inverse-on-surface` (#f3f0ea). Use a slow `cubic-bezier(0.22, 1, 0.36, 1)` entrance to mimic a smooth curtain draw.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme white space. If you think there is enough space, add 20% more. Reference `spacing-24` (8.5rem) for section gaps.
*   **Do** use asymmetrical image placements. Align a portrait photo to the left and its caption to the far right, leaving a "void" in the middle.
*   **Do** ensure all photography has a warm, "golden hour" temperature to match the `primary` gold tones.

### Don'ts
*   **Don't** use `rounded-full` (pills) for buttons. It looks too "tech" and "app-like." Stick to `rounded-sm` or `none` for a tailored, bespoke feel.
*   **Don't** use pure black (#000000). Always use `on-surface` (#1c1c18/Charcoal) for text to maintain the soft, high-end contrast.
*   **Don't** use standard "hover" effects like brightening. Instead, use "Tonal Shifts"—moving a background from `surface-container` to `surface-container-high`.