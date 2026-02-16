# ToolGuard Brand Guidelines

## Brand Identity

ToolGuard is a security proxy that sits between AI agents and MCP servers, providing credential isolation, request review, and policy enforcement.

**Brand Personality:**
- Professional yet approachable
- Trustworthy and secure
- Modern and technical
- Enterprise-ready but accessible to indie developers

## Logo

### Logo Icon (`assets/logo-icon.svg`)
- **Primary Mark:** Modern shield with integrated security elements
- **Design Elements:** 
  - Geometric shield shape with subtle curves
  - Circuit pattern overlay (representing technology/connectivity)
  - Security lock symbol (representing protection)
  - Verification checkmark (representing trust/validation)
- **Usage:** Use as standalone icon for social profiles, favicons, and compact spaces

### Full Logo (`assets/logo-full.svg`)
- **Contains:** Logo icon + "ToolGuard" wordmark
- **Layout:** Horizontal orientation
- **Usage:** Primary logo for headers, marketing materials, and official communications

### Favicon (`assets/favicon.svg`)
- **Simplified Version:** Optimized for 16x16 to 32x32 pixel display
- **Elements:** Circular background with simplified shield and security icons
- **Usage:** Browser tabs, bookmarks, app icons

## Colors

### Primary Brand Palette

```css
/* Primary Brand Colors */
--brand-900: #0c4a6e;  /* Deep Blue - primary dark */
--brand-800: #075985;  /* Dark Blue */
--brand-700: #0369a1;  /* Medium Blue */
--brand-600: #0284c7;  /* Brand Blue */
--brand-500: #0ea5e9;  /* Primary Light - primary bright */
--brand-400: #38bdf8;  /* Light Blue */
--brand-300: #7dd3fc;  /* Lighter Blue */
--brand-200: #bae6fd;  /* Very Light Blue */
--brand-100: #e0f2fe;  /* Pale Blue */
--brand-50:  #f0f9ff;  /* Almost White Blue */
```

### Primary Gradient
- **Main Gradient:** `linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)`
- **Usage:** Logo backgrounds, hero sections, primary CTAs

### Neutral Colors
```css
/* Neutrals */
--gray-900: #111827;  /* Primary text */
--gray-800: #1f2937;  /* Secondary text */
--gray-600: #4b5563;  /* Tertiary text */
--gray-400: #9ca3af;  /* Disabled text */
--gray-200: #e5e7eb;  /* Borders */
--gray-100: #f3f4f6;  /* Backgrounds */
--gray-50:  #f9fafb;  /* Section backgrounds */
```

## Typography

### Primary Font
**Inter** - Clean, modern sans-serif font
- Usage: All body text, UI elements, and secondary headings
- Fallbacks: `-apple-system, BlinkMacSystemFont, sans-serif`

### Font Weights
- **400 (Regular):** Body text, descriptions
- **500 (Medium):** Secondary headings, emphasized text
- **600 (Semibold):** Subheadings, buttons
- **700 (Bold):** Primary headings, logo wordmark
- **800 (Extrabold):** Hero titles, major headings

## Logo Usage Guidelines

### Do's
✅ **Use adequate white space** around the logo
✅ **Maintain aspect ratio** when scaling
✅ **Use on appropriate backgrounds** (ensure sufficient contrast)
✅ **Use the full logo** for primary brand applications
✅ **Use the icon alone** when space is limited

### Don'ts
❌ **Don't stretch or distort** the logo
❌ **Don't use on low-contrast backgrounds**
❌ **Don't add effects** (drop shadows, outlines, etc.)
❌ **Don't alter the colors** outside of approved variations
❌ **Don't recreate or approximate** the logo

### Size Guidelines
- **Minimum size (full logo):** 120px width
- **Minimum size (icon only):** 24px width
- **Recommended sizes:**
  - Web header: 200-250px width
  - Email signature: 150px width
  - Social media profile: 256x256px (icon)

### Variations

#### Standard (Default)
- Full color with gradient
- Use on light backgrounds

#### Monochrome
- Single color version for special applications
- Available in:
  - White (for dark backgrounds)
  - Dark blue (#0c4a6e) (for light backgrounds)
  - Black (for maximum contrast)

## Applications

### Web
- **Header Logo:** Use full logo (200-250px width)
- **Favicon:** Use simplified favicon.svg
- **Footer:** Can use icon + text or full logo
- **Social Share:** Use og-image.svg for Open Graph previews

### Social Media
- **Profile Image:** Use logo-icon.svg (square format)
- **Cover Images:** Adapt og-image.svg layout
- **Posts:** Use full logo with adequate white space

### Print
- Export SVG as high-resolution PNG/PDF
- Ensure minimum sizes are maintained
- Test readability at actual print size

## Assets Included

```
assets/
├── logo-icon.svg     # Standalone icon (256x256)
├── logo-full.svg     # Full logo with wordmark (350x80)
├── favicon.svg       # Optimized favicon (32x32)
└── og-image.svg      # Social media share image (1200x630)
```

## Brand Voice & Messaging

### Key Messages
- "Security proxy for AI agents"
- "Credential isolation • Policy enforcement • Audit logging"
- "Open-source security for AI agents"

### Tone
- **Professional** but not corporate
- **Technical** but accessible
- **Trustworthy** and reliable
- **Modern** and forward-thinking

---

*Last updated: February 2026*
*For questions or additional assets, contact the development team.*