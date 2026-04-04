---
description: portfolio styling layout conventions
---

# Portfolio Design Conventions

The following UI/UX conventions must be applied to all pages within the portfolio to ensure visual consistency:

1. **Vertical Section Spacing:**
   - Default margin-bottom for individual sections (`<section>`) should be tightly spaced using `mb-8` (rather than large gaps like `mb-16` or `mb-24`).
   - For alternate background sections (`bg-surface-container-low`), reduce vertical padding from `py-20` to `py-8`. This ensures a highly connected, smooth scrolling experience.

2. **Left-Border Accent Lists:**
   - When styling list items or informational blocks (like 'Vai trò', 'Kết quả') using a left accent border (`border-l-2 border-primary`), **DO NOT** use large uniform paddings like `p-8`. Full padding stretches the border artificially past the text.
   - **Correct approach:** Use tight vertical padding and horizontal left-padding only. Example class: `pl-6 py-2 border-l-2 border-primary`.

3. **Typography for Contact & Navigation elements:**
   - Navigation links, phone numbers, and primary call-to-actions (e.g. 'Contact') should be perfectly synchronized.
   - Standard navigation font styling: `font-serif font-bold text-lg tracking-tight`.
   - Small labels/headers ("Điện thoại", "Email") should use: `font-sans text-xs uppercase tracking-[0.1rem]`.
   - Data values (like the actual phone number or email string) should use: `font-sans text-xs tracking-[0.1rem]`. Do NOT apply uppercase to email addresses.

4. **Icons:**
   - Instead of the word "Phone", use the `deskphone` Material Symbol for contact sections to maintain a clean visual look.

5. **Image Visual Effects:**
   - Do not use hover visual filters that hide or obscure the main content of images (e.g., `grayscale hover:grayscale-0`).
   - Images in layout grids should consistently remain in full color for immediate clarity. Avoid relying on hover to reveal the true visual state of an image.
