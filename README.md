# NexaFlow ERP — Full-Stack SaaS Website

> A premium, production-quality ERP marketing website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Prisma.

![NexaFlow ERP](https://placeholder.com/1200x630)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Database ORM | Prisma |
| Database | PostgreSQL (Supabase or self-hosted) |
| UI Components | Radix UI primitives |

---

## Project Structure

```
nexaflow-erp/
├── prisma/
│   └── schema.prisma          # Database schema (Lead model)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with Navbar + Footer
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles + CSS variables
│   │   ├── solutions/
│   │   │   └── page.tsx       # Solutions page
│   │   ├── industries/
│   │   │   └── page.tsx       # Industries page
│   │   ├── pricing/
│   │   │   └── page.tsx       # Pricing page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact / Demo Request page
│   │   ├── admin/
│   │   │   └── page.tsx       # Admin dashboard (protected)
│   │   └── api/
│   │       └── demo/
│   │           └── route.ts   # POST: create lead, GET: list leads (admin)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky responsive navbar
│   │   │   └── Footer.tsx     # Full footer with links
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── SolutionsSection.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   ├── AISection.tsx
│   │   │   ├── IntegrationsSection.tsx
│   │   │   ├── SecuritySection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── CTABanner.tsx
│   │   ├── solutions/
│   │   │   ├── SolutionsHero.tsx
│   │   │   └── ModuleDetails.tsx
│   │   ├── industries/
│   │   │   └── IndustriesPage.tsx
│   │   ├── pricing/
│   │   │   └── PricingPage.tsx
│   │   ├── contact/
│   │   │   └── ContactPage.tsx
│   │   ├── admin/
│   │   │   └── AdminDashboard.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionHeader.tsx
│   │       └── toaster.tsx
│   ├── lib/
│   │   ├── db.ts              # Prisma client singleton
│   │   ├── validations.ts     # Zod schemas
│   │   └── utils.ts           # cn() and helpers
│   ├── types/
│   │   └── index.ts           # Global TypeScript interfaces
│   └── hooks/
│       └── useScrolled.ts     # Scroll detection hook
└── README.md
```

---

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (or Supabase account)
- npm or pnpm

### 1. Clone and install

```bash
git clone https://github.com/your-org/nexaflow-erp.git
cd nexaflow-erp
npm install
```

### 2. Environment setup

```bash
cp .env.example .env
```

Edit `.env` and set:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/nexaflow_erp"
ADMIN_SECRET="your-secure-admin-secret"
```

**Using Supabase?**
1. Create a project at [supabase.com](https://supabase.com)
2. Copy the connection string from Project Settings → Database → Connection string (URI mode)
3. Paste into `DATABASE_URL`

### 3. Database setup

```bash
npm run db:push        # Push schema to database
npm run db:generate    # Generate Prisma client
```

For production, use migrations instead:
```bash
npx prisma migrate dev --name init
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Install missing Tailwind plugin

```bash
npm install tailwindcss-animate @hookform/resolvers
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — full marketing page with all 12 sections |
| `/solutions` | Detailed ERP module pages |
| `/industries` | Industry-specific solution pages |
| `/pricing` | 3-tier pricing with annual/monthly toggle + comparison table |
| `/contact` | Demo request form with validation |
| `/admin` | Lead management dashboard (secret-protected) |
| `/api/demo` | POST to submit, GET with Bearer token to list leads |

---

## API Reference

### `POST /api/demo`

Submit a demo request. Data is validated with Zod and saved to PostgreSQL.

**Request body:**
```json
{
  "fullName": "Sarah Johnson",
  "workEmail": "sarah@company.com",
  "companyName": "Acme Corp",
  "companyWebsite": "https://acme.com",
  "phoneNumber": "+1 555 000 0000",
  "industry": "Manufacturing",
  "companySize": "51–200 employees",
  "message": "We need help with inventory and finance..."
}
```

**Response (201):**
```json
{ "success": true, "message": "Demo request submitted.", "data": { "id": "..." } }
```

### `GET /api/demo?page=1&limit=20`

List leads. Requires `Authorization: Bearer <ADMIN_SECRET>`.

---

## Admin Dashboard

Visit `/admin` in your browser. Enter your `ADMIN_SECRET` value to authenticate and view all submitted leads.

Features:
- Search by name, email, or company
- Status badges (NEW, CONTACTED, QUALIFIED, DEMO_SCHEDULED, CLOSED)
- Lead detail expansion
- Pagination

---

## Deployment

### Vercel (recommended)

```bash
npx vercel deploy
```

Set environment variables in the Vercel dashboard:
- `DATABASE_URL`
- `ADMIN_SECRET`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Customisation

### Brand colours
Edit `tailwind.config.js` → `theme.extend.colors.brand` to change the primary palette.

### Adding pages
Create `src/app/[page]/page.tsx` using the App Router convention. Reuse shared components from `src/components/`.

### Database schema changes
Edit `prisma/schema.prisma`, then run:
```bash
npx prisma migrate dev --name describe-change
```

---

## License

MIT © NexaFlow Technologies
