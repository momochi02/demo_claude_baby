Build a ReactJS "Create Request" page for an automation testing platform.

Layout:
- 3 columns:
  1. LEFT: Step Navigation (vertical)
  2. CENTER: Main content (form)
  3. RIGHT: Device list (keep existing UI)

Flow has 3 steps:
1. Select Module
2. Module Configuration
3. Review & Submit

LEFT (Step Navigation):
- Show steps with status: active / done / upcoming
- Under "Select Module", display selected module name + description (no border, simple text)

CENTER:

Step 1 – Select Module:
- Radio list:
  - Check GUI
  - Interruption Test
  - Change Language
  - App Update
  - Fotal Update
- Next button (disabled if not selected)

Step 2 – Module Configuration (focus on Fotal Update):
- Sections:
  1. Update Scenario (App Update / Flash CSC / Software Update)
  2. Update Input (dynamic by scenario)
  3. Test Scope (Regression / Smoke)
  4. Regression Suite (dropdown or upload)
  5. Advanced Options (checkboxes)
- Show "Configuration Summary" at bottom
- Only form content scrollable
- Footer buttons (Back / Next) fixed

Step 3 – Execution Summary:
- Show selected config:
  - Module, Scenario, Scope, Suite, Options, Device
- Show error if no device selected
- "Create Request" button disabled until valid

RIGHT (Device Panel):
- Reuse existing device list
- Allow selecting 1 device
- Show selected device in summary

UX requirements:
- Clean, modern UI (like Jira / Notion)
- No heavy borders in navigation
- Clear spacing and hierarchy
- Buttons always visible (sticky footer)
- Disable Next when required fields missing

Tech:
- React functional components
- Split into components:
  - StepNavigation
  - ModuleSelector
  - ModuleConfiguration
  - FotalConfigForm
  - ExecutionSummary
  - DevicePanel
- Use props + state to manage flow
