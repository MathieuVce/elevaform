# ElevaForm

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Google Calendar](https://img.shields.io/badge/Google_Calendar_API-4285F4?style=flat&logo=googlecalendar&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=flat&logo=mail.ru&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

Site vitrine et outil de réservation pour un coach diplômé d'état spécialisé en accompagnement pré et post-opératoire sur la Côte d'Azur.

---

## Stack

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 14 (App Router) |
| Langage | TypeScript |
| Style | Tailwind CSS + CSS custom (design tokens) |
| Polices | Cormorant Garamond · Jost · JetBrains Mono |
| Réservation | Google Calendar API (Service Account) |
| Emails contact | Resend |
| Déploiement | Vercel |

---

## Setup local

### Prérequis

- Node.js 18+
- Un compte Google Cloud avec une **Service Account** ayant accès au calendrier Google
- Un compte [Resend](https://resend.com) pour les emails de contact

### Installation

```bash
npm install
```

### Variables d'environnement

Créer un fichier `.env.local` à la racine :

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

GOOGLE_CLIENT_EMAIL=elevaform-booking@elevaform.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMII...\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID=elevaform.coaching@gmail.com
```

> **Important** — La clé privée Google doit avoir ses sauts de ligne sous forme `\n` (chaîne échappée, entre guillemets doubles).

### Partage du calendrier Google

Dans Google Calendar, partager le calendrier `elevaform.coaching@gmail.com` avec le service account :
- Email : `elevaform-booking@elevaform.iam.gserviceaccount.com`
- Permission : **Apporter des modifications aux événements**

### Lancer en local

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## Déploiement sur Vercel

### 1. Connecter le repo

1. Aller sur [vercel.com](https://vercel.com) → **New Project**
2. Importer le repo GitHub `elevaform`
3. Framework détecté automatiquement : **Next.js**

### 2. Variables d'environnement

Dans **Project Settings → Environment Variables**, ajouter les 4 clés du `.env.local`.

### 3. Domaine

Dans **Project Settings → Domains** :
- Ajouter `elevaform.fr` et `www.elevaform.fr`
- Configurer les enregistrements DNS fournis par Vercel chez le registrar

### 4. Deploy

```bash
git push origin main
```

Vercel déclenche le build automatiquement à chaque push sur `main`.

---

## Structure

```
elevaform/
├── app/
│   ├── api/
│   │   ├── availability/   # GET — créneaux disponibles (Google Calendar freebusy)
│   │   └── booking/        # POST — création événement Google Calendar
│   ├── mentions-legales/
│   ├── actions.ts          # Server action — formulaire de contact (Resend)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BookingModal.tsx     # Modal réservation multi-étapes
│   ├── GradientBackground.tsx
│   ├── ScrollEffects.tsx
│   ├── StickyCTA.tsx
│   ├── Hero.tsx
│   ├── Header.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx
│   └── ...
└── public/
    ├── favicon.ico
    └── sitemap.xml
```
