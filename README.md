Refactor and improve the UI/UX of an existing ReactJS web application to make it clean, consistent, modern, and professional.

Goals:
- Unify design across all pages (Create Request, Module Configuration, Device Panel, etc.)
- Improve readability, spacing, and visual hierarchy
- Make the UI feel like modern tools (Jira, Notion, Linear)

Requirements:

1. Layout & Structure
- Use consistent spacing system (8px grid)
- Align all sections properly
- Use clear separation between LEFT (navigation), CENTER (content), RIGHT (device panel)
- Avoid clutter and unnecessary borders

2. Typography
- Define hierarchy:
  - Page title (large, bold)
  - Section title
  - Label
  - Description (small, gray)
- Use consistent font sizes and weights
- Improve line-height for readability

3. Components Styling
- Buttons:
  - Primary (blue gradient or solid)
  - Secondary (outline)
  - Disabled state clearly visible
- Inputs / Select / Radio / Checkbox:
  - Same height
  - Same border-radius
  - Consistent spacing
- Cards:
  - Use soft shadow instead of heavy borders
  - Rounded corners (12–16px)

4. Navigation (Left Panel)
- Minimal style (no heavy boxes)
- Show active step clearly
- Show selected module as inline text (not boxed)

5. Forms (Center Panel)
- Group into sections
- Add proper spacing between sections
- Only form content scrollable
- Keep footer buttons (Back / Next / Create) fixed

6. Device Panel (Right)
- Improve list readability
- Highlight selected device
- Add hover state

7. Colors
- Primary: blue
- Background: light gray / white
- Text: dark gray / black
- Secondary text: gray
- Avoid too many colors

8. UX Improvements
- Disable buttons when invalid
- Add subtle hover effects
- Add smooth transitions (optional)
- Keep UI simple and not over-designed

Output:
- Refactored React components (JSX + styles)
- Reusable style system (constants or CSS)
- Clean, maintainable code
- Make the UI feel premium and minimal, similar to modern SaaS dashboards.
Avoid bulky UI and prefer clean, airy design.
