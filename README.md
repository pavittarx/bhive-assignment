This is a project for Take Home Assignment by Bhive Workspace. 

The project uses 
- Next.js (React Framework)
- TailwindCss for Styling
- Shadcn Components (modified)
- pnpm for project/dependency management

## Handling of Static Assets
- The project serves static assets as-is without any optimisations due to 
  1. Image Transformations Quota has been depleted on my vercel account, which if enabled will cause all the images to not be available. 
  2. Converting to formats such as `.webp` can be time consuming there is no automated tooling available. 
  3. Icons are served as images instead of being embedded due to configuration concerns. 
  4. Different formats such as `.jpg`, `.png` and `.svg` are used to take complete advantage of the network bandwidth.  

- The project does not use any state management library, as design did not cover any functionality. Instead only had static sections. 
- `data.json` is loaded via `fetch` API and is used to display data on the cards.

 ## Getting Started

Run Development Server
```bash
pnpm dev

```

Run the Build Server

```bash
  pnpm build
  pnpm start
```