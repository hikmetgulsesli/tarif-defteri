```markdown
# Design System Strategy: The Sun-Drenched Kitchen

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Sun-Drenched Kitchen."** 

This system rejects the sterile, "app-like" defaults of modern software in favor of an editorial, tactile experience that feels like a linen-bound recipe journal resting on a wooden countertop at 4:00 PM. We achieve a premium, custom feel through **Organic Asymmetry** and **Tonal Depth**. Instead of rigid grids, we use overlapping elements—such as a recipe image breaking the container bounds—to create a sense of movement. The goal is to move beyond a "functional tool" and into a "digital heirloom."

## 2. Colors & Surface Philosophy
The palette is rooted in warmth, using rich ochres and creams to evoke a sense of home.

### The "No-Line" Rule
To maintain the soft, organic feel of a kitchen, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be defined through:
- **Background Shifts:** Placing a `surface_container_low` card on a `background` or `surface` canvas.
- **Tonal Transitions:** Using color blocks to define headers rather than a stroke line.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, high-quality materials (fine paper, ceramic, frosted glass).
- **Surface (Background):** Your base canvas.
- **Surface Container (Low to High):** Use these to create "nested" importance. A main recipe card might use `surface_container_lowest` (pure white/cream) to pop against a `surface_container_low` page background.
- **Signature Textures:** For primary CTAs (e.g., "Start Cooking"), use a subtle linear gradient transitioning from `primary` (#984800) to `primary_container` (#E07A2F). This adds a "glow" that flat colors lack.
- **The Glass Rule:** For floating navigation or modal overlays, use `surface` with a 12px `backdrop-blur` and 80% opacity. This prevents the UI from feeling "pasted on" and keeps the user grounded in the "kitchen" environment.

## 3. Typography: Editorial Rhythm
The typography system uses a high-contrast pairing to balance tradition with modern utility.

- **Display & Headlines (Playfair Display):** These are our "Editorial Moments." Use `display-lg` for recipe titles and `headline-md` for section headers. The serif nature conveys authority and warmth.
- **Body & Labels (Inter):** Used for instructions and ingredients. This provides a clean, legible counterpoint to the decorative headings.
- **Hierarchy Note:** Increase the tracking (letter-spacing) on `label-sm` (all-caps) to create a premium, curated look for metadata like "PREP TIME" or "CALORIES."

## 4. Elevation & Depth
We eschew traditional "Drop Shadows" for **Ambient Tonal Layering**.

- **The Layering Principle:** Depth is achieved by stacking surface tiers. A `surface_container_highest` element should only ever sit on a `surface_container_low` or `surface` base.
- **Ambient Shadows:** When an element must float (like a FAB or a dragging card), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(45, 42, 38, 0.06);`. The shadow color must be a tinted version of `on_surface`, never pure black.
- **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use `outline_variant` at **15% opacity**. It should feel like a faint pencil mark, not a digital line.

## 5. Components

### Buttons
- **Primary:** XL rounded (1.5rem), using the signature Primary-to-Container gradient. Text should be `title-sm` (Inter, Bold).
- **Secondary:** Surface-colored with a "Ghost Border" and `on_surface` text.
- **Interaction:** On hover, the button should "lift" using the Ambient Shadow, not change color drastically.

### Cards & Recipe Feeds
- **Rule:** No dividers. Use `surface_container_low` for the card body and `surface_container_lowest` for nested meta-information.
- **Asymmetry:** Recipe images within cards should utilize the `xl` (16px) corner radius, while the card container itself may use `lg` (12px) to create a sophisticated, slightly "offset" visual rhythm.

### Ingredient Lists & Checkboxes
- **Styling:** Use `surface_container_high` for the background of a selected ingredient row. 
- **Checkboxes:** When checked, use `primary` fill. When unchecked, use a 10% opacity `on_surface_variant` fill—avoiding the "empty box" look.

### Cooking Mode (Interactive)
- Use "Glassmorphism" for the current step card. This allows the user to see the "next steps" blurred in the background, creating a sense of progression without clutter.

## 6. Do's and Don'ts

### Do
- **Use Vertical White Space:** Use the Spacing Scale (24px, 32px, 48px) as your primary tool for separating content. 
- **Overlapping Elements:** Allow recipe images to slightly overlap the header area to break the "boxed-in" feel.
- **Lucide Iconography:** Use a 1.5px stroke weight for icons to match the weight of the `Inter` body text.

### Don't
- **Don't use 100% Black:** Never use #000000. Use `on_surface` (#1E1B17) for all text to keep the warmth.
- **Don't use Sharp Corners:** Even for small tags, the minimum radius is `sm` (4px). We want the UI to feel "soft to the touch."
- **Don't use Dividers:** Avoid horizontal rules (`<hr>`). If a list feels cluttered, increase the padding or shift the background tone of every other item.

---
*Director's Note: Every screen should feel like a page worth saving. If a layout feels too "standard," look at the surface hierarchy and see where you can replace a line with a soft color transition or an intentional gap.*