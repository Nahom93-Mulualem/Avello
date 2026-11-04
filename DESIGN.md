---
name: Abel Gidey Personal Trainer
tagline: Precision first. Power follows.
colors:
  canvas: '#F7F3EB'
  sand: '#E8DFD1'
  surface: '#FFFFFF'
  ink: '#292C27'
  ink-soft: '#434843'
  primary: '#354B3B'
  primary-deep: '#1F3426'
  on-primary: '#FFFFFF'
  secondary: '#A8573A'
  secondary-soft: '#C98262'
  on-secondary: '#FFFFFF'
  tertiary: '#879477'
  tertiary-tint: '#E3E8DA'
  amber: '#F0B35A'
  outline: '#C3C8C1'
  error: '#BA1A1A'
typography:
  display-xl: {fontFamily: Newsreader, fontSize: 64px, fontWeight: '400', lineHeight: 70px, letterSpacing: -0.02em}
  display-xl-mobile: {fontFamily: Newsreader, fontSize: 40px, fontWeight: '400', lineHeight: 46px, letterSpacing: -0.015em}
  headline-lg: {fontFamily: Newsreader, fontSize: 42px, fontWeight: '400', lineHeight: 50px, letterSpacing: -0.015em}
  headline-lg-mobile: {fontFamily: Newsreader, fontSize: 30px, fontWeight: '400', lineHeight: 38px}
  headline-sm: {fontFamily: Newsreader, fontSize: 24px, fontWeight: '500', lineHeight: 32px}
  title-md: {fontFamily: DM Sans, fontSize: 17px, fontWeight: '600', lineHeight: 24px}
  body-lg: {fontFamily: DM Sans, fontSize: 18px, fontWeight: '400', lineHeight: 28px}
  body-md: {fontFamily: DM Sans, fontSize: 16px, fontWeight: '400', lineHeight: 25px}
  label-md: {fontFamily: DM Sans, fontSize: 12px, fontWeight: '600', lineHeight: 16px, letterSpacing: 0.06em, textTransform: uppercase}
rounded:
  md: 12px
  lg: 16px
  xl: 24px
  hero: 28px
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  section-gap: 6.5rem
  section-gap-mobile: 4rem
  max-width: 1200px
motion:
  duration-fast: 150ms
  duration-base: 400ms
  duration-slow: 800ms
  easing-soft: cubic-bezier(0.22, 1, 0.36, 1)
  stagger: 80ms
  reveal-distance: 20px
---

# Abel Gidey Personal Trainer: Design System

This file is the single source of truth for the look, feel and motion of Abel Gidey's website. Any designer or AI agent building pages must follow it. If something is not covered here, choose the calmer, simpler option.

## 1. Brand

**Who Abel is:** a personal trainer who coaches on mechanics rather than ego. Load goes up only when the movement is clean; power comes after precision. Every plan starts from the client's body, not from a template. Coaching works in the room or online, anywhere in the world.

**Personality:** warm, precise, encouraging, calm. Never loud, never shaming, never "no pain, no gain".

**Core line:** *Precision first. Power follows.*

**Audience:** adults who want to get stronger safely, people returning from injury or long breaks, and busy people who want a plan that bends around their week. They want a human coach, not a gym-bro experience.

**Style in one sentence:** warm editorial minimalism, with earthy greens and clay tones, soft rounded shapes, and generous space. The page should feel like a friendly boutique studio, not a loud gym flyer.

## 2. Colors

Use only the tokens in the front matter. Roles:

- **Canvas `#F7F3EB`:** the main page background (warm cream).
- **Sand `#E8DFD1`:** secondary sections and program cards.
- **Surface `#FFFFFF`:** raised cards and form fields.
- **Ink `#292C27`:** all body text and headings on light backgrounds.
- **Primary `#354B3B` (forest green):** headings accents, nav, primary buttons, dark section backgrounds.
- **Secondary `#A8573A` (terracotta):** main call-to-action buttons and links. This darker shade is required for any text or button label, because white on it passes contrast (about 5:1).
- **Secondary-soft `#C98262`:** decoration only (shapes, big numbers, highlights, chart accents). Never for small text and never behind white small text.
- **Tertiary `#879477` (sage):** calm accents, tags and dividers. Use `tertiary-tint` for tag backgrounds.
- **Amber `#F0B35A`:** use only inside dark sections, to echo the warm ceiling lights in Abel's gym photos.

**Rules**
1. One strong action color per screen: terracotta for "Book".
2. 60% canvas and sand, 25% white and ink, 10% forest, 5% terracotta and amber.
3. Pure black and cold grays are not used. Use ink and the neutrals above.
4. Text contrast must be at least 4.5:1 (3:1 for text 24px and larger).

## 3. Typography

- **Newsreader** (serif) for headlines, quotes and big numbers. Use weight 400, and set one emphasized word in italic per headline (for example, "Get *stronger*, one clean rep at a time").
- **DM Sans** for everything else: body, buttons, forms, labels.
- Labels and small tags are uppercase with letter spacing (`label-md`).
- Body line length 60 to 75 characters. Never use more than two typefaces.
- On mobile use the `-mobile` sizes from the front matter.

## 4. Layout and spacing

- 12-column grid on desktop (max width 1200px), 8 on tablet, 4 on mobile.
- Section vertical gap: `section-gap` on desktop, `section-gap-mobile` on phones.
- Mix symmetric and asymmetric layouts (for example, a 55/45 text and photo split) so the page does not feel like a template.
- Design phone first. Every page must work at 360px width with no horizontal scrolling.
- Alternate section backgrounds (canvas, sand, canvas, forest) to give the scroll a rhythm.

## 5. Shape and depth

- Buttons: full pill. Inputs and small cards: 12 to 16px radius. Feature cards: 24px. Hero photos: 28px, or an arch shape (rounded top) for portraits.
- Depth is soft and warm, never harsh:
  - Level 1 card: `0 4px 20px -2px rgba(41,44,39,0.05)` plus a 1px border `rgba(53,75,59,0.08)`
  - Level 2 (hover or floating): `0 12px 32px -4px rgba(41,44,39,0.10)`
  - Level 3 (modals): `0 24px 48px -8px rgba(41,44,39,0.14)`

## 6. Page structure

Build the home page in this order. One main message and one main action per section.

1. **Header:** wordmark "Abel Gidey" on the left, links (About, Services, Results, Contact), and a terracotta "Book a session" pill. On scroll the header gets a canvas background and a soft shadow. On mobile, collapse the links into a menu and keep the Book button visible.
2. **Hero:** headline (display-xl), one supporting sentence, one main button ("Start with an assessment") and one quiet text link ("See what I offer"). A large photo of Abel on the right.
3. **About:** a portrait in an arch shape, a short first-person intro, and Abel's approach in two or three plain sentences. Real certifications and years of experience only.
4. **Services:** the seven services below as cards, plus one final call-to-action card.
5. **How coaching works:** three short steps (assessment, written plan, ongoing coaching). Keep it simple and real.
6. **Results:** real client quotes only. Use the quote tile style from the components section.
7. **Booking and contact:** a dark forest section with amber highlights. Form with name, contact and goal, plus phone, Telegram and location.
8. **Footer:** wordmark, social links, location.

### The seven services (use this exact wording)

1. **Weight Training:** Structured resistance work built on mechanics rather than ego. Load progresses only once the movement is clean. Power comes after precision.
2. **Individual Assessment:** Before anything is programmed, we audit how you actually move. Every plan starts from your body, not from a template.
3. **Fitness Programs:** A written roadmap for your goal, your equipment and your week, private in the room or delivered online, anywhere in the world.
4. **Nutrition Advice:** Practical guidance that supports the training instead of fighting it. Fuel for the work, not a punishment protocol.
5. **Fitness Advice:** The questions between sessions: recovery, sleep, pain, travel, plateaus. Coaching continues outside the gym.
6. **Adaptability:** Injuries, schedules and bad weeks happen. The programme bends around them without losing the thread of progress.
7. **Technical Skills:** Cueing, tempo, positioning and correction. The detail work that turns an exercise into an injury-proof pattern.

## 7. Components

**Buttons**
- *Primary action:* terracotta `#A8573A`, white text, full pill, padding 14px 28px, minimum height 44px. Hover: slightly darker, lift 2px, warm shadow. An arrow icon slides 4px right on hover.
- *Secondary:* forest `#354B3B`, white text, same shape.
- *Outline:* transparent, 1px forest border, forest text. Hover fills with 5% forest.
- *Ghost link:* forest text with an underline that draws in from the left on hover.

**Cards**
- *Service card:* white, 24px radius, Level 1 shadow, a large Newsreader number (01 to 07) in `secondary-soft`, a headline-sm title, body-md text. Hover: lift 6px, shadow to Level 2, number turns terracotta.
- *Program card:* sand background, no border, 24px radius.

**Form fields**
- White fill, 1px sand border, 14px radius. Labels sit above the field, always visible (never placeholder-only). Focus: forest border and a 3px ring `rgba(53,75,59,0.18)`. Error: red border with a plain, kind message ("Please add a way for me to reach you").

**Tags**
- Capsule, label-md. Use sage tint for low intensity or recovery topics, terracotta tint (`rgba(201,130,98,0.18)`) for strength topics, and sand for equipment or location tags.

**Client quote tile**
- Sand background, Newsreader italic quote text, sage quotation mark, client first name and short context underneath. Only real quotes, with permission.

## 8. Photography

Abel's real photos are the strongest asset on the site. Use them.

- **Look:** warm gym light, real moments of coaching and clean technique. The dark charcoal gym with amber ceiling lights is the signature setting.
- **Hero:** a full-body vertical shot of Abel mid-exercise, with empty space beside him for text.
- **About portrait:** a calm standing portrait, ideally smiling, in an arch-shaped crop.
- **Mood:** the site is warm and friendly, so include at least one relaxed, smiling photo in the hero or about section.
- **Consistency:** apply the same slight warm tint to every photo so gym shots and studio shots feel like one set. Do not mix grey studio backdrops with gym backgrounds in the same section.
- **Branding in photos:** shirt logos must be spelled the same in every image and match Abel's actual brand. If unsure, prefer photos in the plain black shirt.
- **Privacy:** crop or blur other gym members. Do not use AI-made images to show clients, results or before-and-after changes.
- **Cropping:** keep the face in the upper third, and never crop at the joints.
- **Format:** WebP or AVIF, hero under 250 KB, other images under 150 KB, with width and height set to prevent layout shift. Every image has descriptive alt text.

## 9. Motion and animation

Motion should feel calm, like a deep breath. Pick one signature effect, the soft fade-up, and use it everywhere.

**Tokens:** see `motion` in the front matter.

**Rules**
1. Animate only `opacity` and `transform` (no animating width, height or top), to stay smooth on phones.
2. Distances stay small: 12 to 24px.
3. Each element animates once, the first time it enters the viewport (use Intersection Observer, trigger at about 15% visible).
4. Groups appear in sequence using `stagger` (for example, service cards one after another).
5. Respect `prefers-reduced-motion`: turn off parallax and movement, keep simple fades or none.
6. Nothing auto-plays video with sound, and nothing blocks scrolling.
7. If an effect does not help the visitor understand or book, remove it.

## 10. Scrolling experience

- **Smooth anchor scrolling** with an offset equal to the header height.
- **Fade-up reveal** for headlines, paragraphs, cards and photos.
- **Hero parallax:** the photo moves at about 85% of scroll speed (desktop only).
- **Sticky header** that gains a background and shadow after 40px of scroll.
- **Scroll progress:** a 3px terracotta line at the very top of the page.
- **Section rhythm:** alternate canvas, sand and one forest section so each scroll "screen" feels different.
- **Services marquee (optional):** a slow, pausable band of the seven service names between sections.
- **Mobile:** a sticky bottom "Book a session" bar that appears after the hero and hides near the contact form.
- **Count-up numbers** only if Abel has real figures (years coaching, clients coached). Never invent statistics.

## 11. Interaction details

- Cards lift and deepen their shadow on hover; the cursor stays default.
- Photos have a very slow zoom (to 1.04) on hover inside a clipped frame.
- Buttons press down 1px on click.
- The form shows a friendly confirmation state ("Thank you, I'll be in touch soon") after sending.
- Every interactive element has a visible keyboard focus ring (forest, 3px).

## 12. Voice and microcopy

Tone: warm, direct, precise. Short sentences. No shaming, no hype, no body-image pressure.

| Place | Example |
|---|---|
| Hero headline | Get *stronger*, one clean rep at a time. |
| Hero support | Friendly, precise coaching built around your body, your goal and your week. |
| Main button | Start with an assessment |
| Services intro | Coaching that fits your life |
| Form button | Send request |
| Success | Thank you. I'll be in touch soon. |
| Error | Please add a way for me to reach you. |

Avoid: "crush it", "no excuses", "burn fat fast", "beast mode".

## 13. Accessibility

- Text contrast of at least 4.5:1 and touch targets of at least 44px.
- Use real `<button>`, `<a>`, `<label>` elements. Never use a div as a button.
- One `<h1>` per page, headings in order.
- Visible focus states, alt text on all images, `aria-label` on icon-only buttons.
- Never use color alone to carry meaning.
- Page language set, and the layout works at 200% zoom.

## 14. Performance and technical notes

- Target: loads in under 2.5 seconds on a mid-range phone on mobile data.
- Fonts: load only Newsreader (400, 400 italic, 500) and DM Sans (400, 600) with `font-display: swap`.
- Lazy-load every image below the first screen, and preload the hero image.
- Keep JavaScript small. Prefer plain CSS and a small Intersection Observer script over heavy animation libraries.
- Mobile-first CSS with breakpoints at 768px and 1024px.
- Include proper page title, meta description and social share image.

## 15. Do and don't

**Do:** use real photos, real quotes and real details. Leave generous white space. Keep one clear action per section. Keep the same fade-up motion everywhere.

**Don't:** use stock gym clichés, neon colors, harsh black, countdown timers, fake scarcity, invented statistics, fake testimonials or fake results. Don't use more than two typefaces or more than one signature animation style.

## 16. Placeholders to fill with real details

Abel's phone or WhatsApp, Telegram handle, Instagram, gym address and city, certifications, years of experience, real testimonials, and pricing or packages (if he wants to show them).
