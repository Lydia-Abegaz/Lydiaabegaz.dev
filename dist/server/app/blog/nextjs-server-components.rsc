2:I[4215,["105","static/chunks/105-66b2302e39e77463.js","308","static/chunks/app/blog/%5Bslug%5D/page-72bd476fc0ff9331.js"],""]
4:I[5613,[],""]
6:I[1778,[],""]
7:I[78,["185","static/chunks/app/layout-7b4bb461a9ce0bda.js"],"ThemeProvider"]
8:I[9817,["185","static/chunks/app/layout-7b4bb461a9ce0bda.js"],"Analytics"]
3:T73c,## The Server Component Revolution

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

Push `"use client"` as deep into the component tree as possible. The less client-side JavaScript you ship, the faster your app loads.5:["slug","nextjs-server-components","d"]
0:["s4TKJ30ljBRReK3C36eSb",[[["",{"children":["blog",{"children":[["slug","nextjs-server-components","d"],{"children":["__PAGE__?{\"slug\":\"nextjs-server-components\"}",{}]}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":[["slug","nextjs-server-components","d"],{"children":["__PAGE__",{},["$L1",["$","$L2",null,{"post":{"title":"Optimizing Next.js: Server Components vs Client Components","slug":"nextjs-server-components","date":"2025-08-10","tags":["Next.js","Performance","React","Web Dev"],"excerpt":"A practical guide to understanding when to use Server Components vs Client Components in Next.js 14, with real performance benchmarks from my portfolio.","readTime":"7 min read","emoji":"⚡","accent":"#D4DE95","glow":"rgba(212,222,149,0.25)","content":"$3"}}],null]]},["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children","$5","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},[null,["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":["$","body",null,{"className":"__variable_dc5043 __variable_898c26 font-sans antialiased","style":{"fontFamily":"var(--font-outfit), sans-serif"},"children":[["$","$L7",null,{"children":["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"styles":null}]}],["$","$L8",null,{}]]}]}],null]],[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e048759803a2dd21.css","precedence":"next","crossOrigin":""}]],"$L9"]]]]
9:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Optimizing Next.js: Server Components vs Client Components | Lidia Abegaz"}],["$","meta","3",{"name":"description","content":"A practical guide to understanding when to use Server Components vs Client Components in Next.js 14, with real performance benchmarks from my portfolio."}],["$","meta","4",{"name":"author","content":"Lidia Aliso"}],["$","meta","5",{"name":"keywords","content":"Software Engineer,Full Stack Developer,Blockchain Developer,Soroban,Stellar,React,Next.js,MERN Stack,Portfolio,Ethiopia,Addis Ababa,AASTU"}],["$","meta","6",{"property":"og:title","content":"Lidia Aliso | Full Stack & Blockchain Developer"}],["$","meta","7",{"property":"og:description","content":"Full-stack and blockchain developer from Ethiopia crafting impactful digital experiences."}],["$","meta","8",{"property":"og:type","content":"website"}],["$","meta","9",{"name":"twitter:card","content":"summary"}],["$","meta","10",{"name":"twitter:title","content":"Lidia Aliso | Full Stack & Blockchain Developer"}],["$","meta","11",{"name":"twitter:description","content":"Full-stack and blockchain developer from Ethiopia crafting impactful digital experiences."}]]
1:null
