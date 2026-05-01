2:I[4215,["105","static/chunks/105-66b2302e39e77463.js","308","static/chunks/app/blog/%5Bslug%5D/page-72bd476fc0ff9331.js"],""]
4:I[5613,[],""]
6:I[1778,[],""]
7:I[78,["185","static/chunks/app/layout-7b4bb461a9ce0bda.js"],"ThemeProvider"]
8:I[9817,["185","static/chunks/app/layout-7b4bb461a9ce0bda.js"],"Analytics"]
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

I plan to extend FairChain with multi-signature compliance approvals and integrate with existing certification bodies. The goal is to make ethical verification accessible to every factory in East Africa.5:["slug","soroban-supply-chain","d"]
0:["s4TKJ30ljBRReK3C36eSb",[[["",{"children":["blog",{"children":[["slug","soroban-supply-chain","d"],{"children":["__PAGE__?{\"slug\":\"soroban-supply-chain\"}",{}]}]}]},"$undefined","$undefined",true],["",{"children":["blog",{"children":[["slug","soroban-supply-chain","d"],{"children":["__PAGE__",{},["$L1",["$","$L2",null,{"post":{"title":"Building Ethical Supply Chains with Soroban Smart Contracts","slug":"soroban-supply-chain","date":"2024-12-15","tags":["Blockchain","Soroban","Stellar","Rust"],"excerpt":"How I built FairChain — a blockchain-based verification platform that helps Ethiopian factories prove compliance with international standards using Soroban smart contracts.","readTime":"8 min read","emoji":"🔗","accent":"#636B2F","glow":"rgba(99,107,47,0.25)","content":"$3"}}],null]]},["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children","$5","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},[null,["$","html",null,{"lang":"en","suppressHydrationWarning":true,"children":["$","body",null,{"className":"__variable_dc5043 __variable_898c26 font-sans antialiased","style":{"fontFamily":"var(--font-outfit), sans-serif"},"children":[["$","$L7",null,{"children":["$","$L4",null,{"parallelRouterKey":"children","segmentPath":["children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L6",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"styles":null}]}],["$","$L8",null,{}]]}]}],null]],[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/e048759803a2dd21.css","precedence":"next","crossOrigin":""}]],"$L9"]]]]
9:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","title","2",{"children":"Building Ethical Supply Chains with Soroban Smart Contracts | Lidia Abegaz"}],["$","meta","3",{"name":"description","content":"How I built FairChain — a blockchain-based verification platform that helps Ethiopian factories prove compliance with international standards using Soroban smart contracts."}],["$","meta","4",{"name":"author","content":"Lidia Aliso"}],["$","meta","5",{"name":"keywords","content":"Software Engineer,Full Stack Developer,Blockchain Developer,Soroban,Stellar,React,Next.js,MERN Stack,Portfolio,Ethiopia,Addis Ababa,AASTU"}],["$","meta","6",{"property":"og:title","content":"Lidia Aliso | Full Stack & Blockchain Developer"}],["$","meta","7",{"property":"og:description","content":"Full-stack and blockchain developer from Ethiopia crafting impactful digital experiences."}],["$","meta","8",{"property":"og:type","content":"website"}],["$","meta","9",{"name":"twitter:card","content":"summary"}],["$","meta","10",{"name":"twitter:title","content":"Lidia Aliso | Full Stack & Blockchain Developer"}],["$","meta","11",{"name":"twitter:description","content":"Full-stack and blockchain developer from Ethiopia crafting impactful digital experiences."}]]
1:null
