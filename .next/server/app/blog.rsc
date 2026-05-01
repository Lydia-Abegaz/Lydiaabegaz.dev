2:I[1530,["105","static/chunks/105-9d7cc79830211d9e.js","404","static/chunks/app/blog/page-eb43a49aad486933.js"],""]
6:I[5613,[],""]
7:I[1778,[],""]
8:I[78,["185","static/chunks/app/layout-7f48ed164915c267.js"],"ThemeProvider"]
9:I[9817,["185","static/chunks/app/layout-7f48ed164915c267.js"],"Analytics"]
3:T82a,## Why Blockchain for Supply Chains?

Global supply chains are complex, opaque, and often exploitative. Ethiopian factories exporting textiles and agricultural products face a trust gap — international buyers want proof of ethical practices, but traditional certifications are expensive and easy to forge.

This is where blockchain shines. By recording compliance data on an immutable ledger, we create a trustless verification system that anyone can audit.

## Enter Soroban

Soroban is Stellar's smart contract platform, and it offered several advantages for FairChain:

- **Low transaction costs** — critical for factories with tight margins
- **Fast finality** — compliance checks complete in seconds
- **Rust-based** — memory safety and performance guarantees

## The Architecture

FairChain uses a hybrid on-chain/off-chain approach:

1. **Off-chain**: Factory compliance documents are hashed using SHA-256
2. **On-chain**: The hash, timestamp, and factory ID are stored in a Soroban smart contract
3. **Verification**: Buyers can verify any document by re-hashing it and comparing against the on-chain record

This keeps gas costs minimal while maintaining cryptographic integrity.

## Key Smart Contract Design

The core contract exposes three functions:

- `register_factory` — onboards a new factory with its public key
- `submit_compliance` — stores a document hash with metadata
- `verify_compliance` — checks if a hash exists and returns its metadata

## Challenges & Lessons

Writing Rust for the first time during a hackathon was intense. The Soroban SDK documentation was still evolving, so I relied heavily on community examples and the Stellar Discord.

The biggest lesson: **design your data structures first**. Soroban's storage model is different from traditional databases, and retrofitting schema changes mid-development is painful.

## What's Next

I plan to extend FairChain with multi-signature compliance approvals and integrate with existing certification bodies. The goal is to make ethical verification accessible to every factory in East Africa.4:T779,## The Challenge

The Hospitality Hackathon 2026 posed a clear challenge: build a digital solution that enhances the guest experience at Kuriftu Resorts. We had 48 hours.

## Team Phoenix's Strategy

Our team of four split responsibilities immediately:

- **Frontend** (me + one teammate): Next.js App Router with Tailwind CSS
- **Backend**: Node.js REST API with MongoDB
- **Design**: Figma prototypes and asset creation

The key decision was to prioritize a working demo over feature completeness. Judges care about what they can interact with.

## Technical Decisions

### Why Next.js App Router?
Server-side rendering gave us SEO benefits and faster initial loads — important for a hospitality platform where guests might search for resort amenities.

### Optimistic UI Updates
For booking interactions, we implemented optimistic updates. The UI reflects the action immediately while the API call happens in the background. This made the app feel snappy under the demo spotlight.

### Component Architecture
We built a reusable component library early — cards, buttons, modals, and form elements. This paid dividends in the final hours when we were assembling pages rapidly.

## The Demo

Our live demo showcased:
- Guest room browsing with real-time availability
- Activity booking and scheduling
- An admin dashboard for resort staff
- Mobile-responsive design throughout

## The Result

We placed as finalists. The judges highlighted our polished UI, working backend integration, and the practical viability of our solution. The experience taught me that hackathons aren't about perfect code — they're about shipping something compelling under pressure.

## Takeaways

1. **Split work by capability, not by feature** — parallel execution is everything in a hackathon
2. **Demo-driven development** — build what you'll show first
3. **Reusable components save time** — invest early, harvest late5:T73c,## The Server Component Revolution

Next.js 14's App Router defaults to Server Components — and for good reason. Server Components render on the server, send zero JavaScript to the client, and dramatically improve performance metrics.

But knowing *when* to use each type is crucial.

## When to Use Server Components

Use Server Components for:
- **Static content** — text, images, layouts
- **Data fetching** — API calls, database queries
- **SEO-critical sections** — headings, meta content
- **Large dependencies** — libraries that don't need client interactivity

## When to Use Client Components

Add `"use client"` only when you need:
- **Event handlers** — onClick, onChange, onSubmit
- **State management** — useState, useReducer
- **Browser APIs** — window, document, localStorage
- **Animation libraries** — Framer Motion, GSAP

## The Mistake I Made

My portfolio originally had `"use client"` at the top of `page.tsx`. This forced the *entire page* — including static text and layout — to be client-rendered. The result:

- Larger JavaScript bundle
- Slower First Contentful Paint
- Worse SEO indexing

## The Fix

I extracted interactive elements into small, focused client components:

- `LoadingScreen` — handles the animated loader
- `HomeContent` — wraps all interactive sections
- `ParticleBackground` — Three.js canvas

The parent `page.tsx` became a Server Component that simply composes these pieces. The static HTML ships immediately, and interactivity hydrates progressively.

## Performance Impact

After the refactor:
- **First Contentful Paint**: improved by ~40%
- **JavaScript bundle**: reduced by ~25%
- **Lighthouse Performance**: 85 → 94

## Rule of Thumb

Push `"use client"` as deep into the component tree as possible. The less client-side JavaScript you ship, the faster your app loads.0:["nglx9NqBVOizqRJ_9FTPz",[[["",{"children":["blog",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":["__PAGE__",{},["$L1",["$","$L2",null,{"posts":[{"title":"Building Ethical Supply Chains with Soroban Smart Contracts","slug":"soroban-supply-chain","date":"2024-12-15","tags":["Blockchain","Soroban","Stellar","Rust"],"excerpt":"How I built FairChain — a blockchain-based verification platform that helps Ethiopian factories prove compliance with international standards using Soroban smart contracts.","readTime":"8 min read","emoji":"🔗","accent":"hsl(25 95% 53%)","glow":"rgba(251, 146, 60, 0.25)","content":"$3"},{"title":"From Hackathon to Production: Building the Kuriftu Platform","slug":"kuriftu-hackathon-journey","date":"2026-03-20","tags":["Hackathon","Next.js","Full Stack","Team Work"],"excerpt":"A behind-the-scenes look at how Team Phoenix built a comprehensive hospitality platform for Kuriftu Resorts in just 48 hours — and placed as finalists.","readTime":"6 min read","emoji":"🏨","accent":"hsl(25 85% 58%)","glow":"rgba(254, 215, 170, 0.25)","content":"$4"},{"title":"Optimizing Next.js: Server Components vs Client Components","slug":"nextjs-server-components","date":"2025-08-10","tags":["Next.js","Performance","React","Web Dev"],"excerpt":"A practical guide to understanding when to use Server Components vs Client Components in Next.js 14, with real performance benchmarks from my portfolio.","readTime":"7 min read","emoji":"⚡","accent":"hsl(25 90% 65%)","glow":"rgba(253, 186, 116, 0.25)","content":"$5"}]}],null]]},["$","$L6",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L7",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},[null,["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":["$","body",null,{"className":"__variable_dc5043 __variable_898c26 font-sans antialiased","style":{"fontFamily":"var(--font-outfit), sans-serif"},"children":[["$","$L8",null,{"children":["$","$L6",null,{"parallelRouterKey":"children","segmentPath":["children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L7",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"styles":null}]}],["$","$L9",null,{}]]}]}],null]],[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/073739b9129b042c.css","precedence":"next","crossOrigin":""}]],"$La"]]]]
a:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Blog | Lidia Aliso"}],["$","meta","3",{"name":"description","content":"Technical articles about blockchain, full-stack development, and software engineering by Lidia Aliso."}],["$","meta","4",{"name":"author","content":"Lidia Aliso"}],["$","meta","5",{"name":"keywords","content":"Software Engineer,Full Stack Developer,Blockchain Developer,Soroban,Stellar,React,Next.js,MERN Stack,Portfolio,Ethiopia,Addis Ababa,AASTU"}],["$","meta","6",{"property":"og:title","content":"Lidia Aliso | Full Stack & Blockchain Developer"}],["$","meta","7",{"property":"og:description","content":"Full-stack and blockchain developer from Ethiopia crafting impactful digital experiences."}],["$","meta","8",{"property":"og:type","content":"website"}],["$","meta","9",{"name":"twitter:card","content":"summary"}],["$","meta","10",{"name":"twitter:title","content":"Lidia Aliso | Full Stack & Blockchain Developer"}],["$","meta","11",{"name":"twitter:description","content":"Full-stack and blockchain developer from Ethiopia crafting impactful digital experiences."}]]
1:null
