# CodeLeap Network

This repository contains a frontend test app for a CodeLeap job application.
The app is a React (Next.js) project implementing a post feed with basic CRUD operations connected to the test backend: `https://dev.codeleap.co.uk/careers/`.

## Project Summary

- Project: `CodeLeap Network`
- Framework: Next.js (App Router)
- Language: TypeScript
- Purpose: Frontend technical test for a frontend position
- Backend API: `https://dev.codeleap.co.uk/careers/`

## Functional features implemented

- Create posts (POST)
- Read posts list (GET)
- Edit posts (PUT) - only authored posts
- Delete posts (DELETE) - only authored posts
- Local username storage and usage when creating posts
- Infinite scroll / pagination in feed
- Modals for edit/delete confirmation
- Input validation with schemas (zod)

## Folder structure

- `src/app`: app routes and pages
  - `(auth)/login/page.tsx` - login view (username entry)
  - `(privacy)/page.tsx` - protected feed page
  - `api/careers` - API endpoints for post CRUD

- `src/components`: reusable UI components
  - `layout`: button, input, textarea, loader, modal
  - `feed`: post cards, post header, post content, filters, post form

- `src/hooks`: business logic hooks
  - auth, posts, CRUD, modal control, infinite scroll, filters

- `src/lib`: axios config

- `src/schemas`: types + validation

- `src/services`: API services for careers/posts

- `src/store`: local/global state (authentication/user)

## Setup and installation

```bash
npm install
npm run dev
```

## Environment variables

Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_API_URL=https://dev.codeleap.co.uk/careers/
```

## Available scripts

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run test` - run tests (Jest)

## App flow

1. Login (type a username saved locally)
2. Access the feed at `/`
3. Create new post with text content
4. Edit or delete your own posts only
5. Posts load from `/api/careers` endpoint

## Optional features and improvements

- Likes, comments, mentions support (future)
- OAuth login (Firebase, etc.)
- Image/media attachments in posts
- More advanced filtering and sorting
- Responsive mobile layout (included)
- Smooth transitions and UI animation
- Persistence (token + local storage login)

## Notes

- This app was created to match CodeLeap test instructions and show a complete CRUD flow.
- If backend instructions or endpoints change, adjust `src/services/api.ts` and `src/services/careers/post.service.ts` accordingly.

### Contact

- If there are issues with environment or execution, contact `vini.garcia@codeleap.co.uk` as requested by the test.
