# RAJITH S — Angular Developer Portfolio

A production-quality, modern, responsive personal portfolio website built with Angular 21, TypeScript, HTML5, CSS3, and Bootstrap for **RAJITH S** (Frontend Developer | Angular Specialist).

---

## 🚀 Technical Features & Highlights

- **Single Source of Truth Architecture**: Fully compliant with specifications in `AGENTS.md`.
- **4-File Component Structure**: Every Angular component adheres to the strict pattern:
  - `component-name.component.ts`
  - `component-name.component.html`
  - `component-name.component.css`
  - `component-name.component.spec.ts`
- **Modern Angular Features**:
  - Standalone Components
  - Angular Signals for state reactivity
  - Angular Router with smooth anchor scrolling
  - RxJS stream management
- **Mobile-First & Responsive**: Fully tested across viewports (320px up to 1600px+).
- **Bootstrap 5 Integration**: Clean grid layout combined with custom CSS design tokens.
- **Accessibility & Performance**:
  - `prefers-reduced-motion` compliance
  - Full keyboard focus rings & semantic HTML5
  - Zero fake metrics or invented details

---

## 🛠️ Tech Stack

- **Framework**: Angular 21
- **Language**: TypeScript 5.9
- **Styling**: CSS3, Bootstrap 5, Bootstrap Icons
- **State & Reactivity**: Angular Signals & RxJS
- **Testing**: Vitest / Angular Build Unit Test runner
- **Icons & Fonts**: Bootstrap Icons, Google Fonts (Plus Jakarta Sans, JetBrains Mono)

---

## 📁 Architecture & Folder Structure

```
src/
├── app/
│   ├── core/
│   │   ├── constants/    # Portfolio master dataset (portfolio-data.ts)
│   │   ├── models/       # TypeScript interfaces (contact, experience, skill, etc.)
│   │   └── services/     # Portfolio data service (portfolio.service.ts)
│   ├── shared/
│   │   └── components/   # SectionHeaderComponent, SkillBadgeComponent
│   ├── layout/
│   │   ├── navbar/       # Responsive Navigation Bar with active state
│   │   └── footer/       # Footer component
│   └── features/
│       ├── hero/                 # Hero banner & CTAs
│       ├── about/                # Professional background & highlights
│       ├── skills/               # Categorized skills & technology groups
│       ├── experience/           # Yorosis Technologies experience & support rotation
│       ├── achievements/         # 6 confirmed impact metrics
│       ├── case-studies/         # 5 professional technical case studies
│       ├── projects/             # Featured Task Management System
│       ├── development-approach/ # Agile/Scrum, testing, and CI/CD workflow
│       ├── education/            # Academic qualifications & languages
│       └── contact/              # Contact info & direct mailto form
```

---

## 💻 Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`.

3. **Run Unit Tests**:
   ```bash
   npm test -- --watch=false
   ```

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 👤 Portfolio Owner

- **Name**: RAJITH S
- **Role**: Frontend Developer | Angular Specialist
- **Email**: [rajithsivaece@gmail.com](mailto:rajithsivaece@gmail.com)
- **Phone**: +91 9344216679
- **LinkedIn**: [linkedin.com/in/rajith-s](https://www.linkedin.com/in/rajith-s)
- **GitHub**: [github.com/rajith-yes](https://github.com/rajith-yes)
