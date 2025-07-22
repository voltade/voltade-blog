import{j as e,u as m}from"./index-dSJS3epV.js";import{N as h}from"./NewsletterForm-D0TS5svg.js";const t=({title:i,description:a,category:s,readTime:o,date:d,image:c,link:r,featured:l=!1})=>{const p=u=>{switch(u.toLowerCase()){case"product updates":return"#3b82f6";case"crm":return"#8b5cf6";case"sales & marketing":return"#10b981";case"product support":return"#f59e0b";case"grants":return"#ff5656ff";default:return"#6b7280"}};return e.jsxs("article",{className:`blog-card ${l?"featured":""}`,children:[e.jsx("div",{className:"blog-card-image",children:e.jsxs("a",{href:r,children:[e.jsx("img",{src:c,alt:i,loading:"lazy"}),e.jsx("div",{className:"blog-card-overlay",children:e.jsx("span",{className:"category-badge",style:{backgroundColor:p(s)},children:s})})]})}),e.jsxs("div",{className:"blog-card-content",children:[e.jsx("h3",{className:"blog-card-title",children:e.jsx("a",{href:r,children:i})}),e.jsx("p",{className:"blog-card-description",children:a}),e.jsxs("div",{className:"blog-card-meta",children:[e.jsx("span",{className:"blog-card-date",children:d}),e.jsx("span",{className:"blog-card-divider",children:"•"}),e.jsx("span",{className:"blog-card-read-time",children:o})]}),e.jsxs("a",{href:r,className:"blog-card-link",children:["Read More",e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-labelledby":"readMoreArrowTitle",children:[e.jsx("title",{id:"readMoreArrowTitle",children:"→"}),e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})]})]})]}),e.jsx("style",{children:`
                .blog-card {
                    background: white;
                    border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                }

                .blog-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }

                .blog-card.featured {
                    border: 2px solid #667eea;
                    box-shadow: 0 10px 15px -3px rgba(102, 126, 234, 0.1);
                }

                .blog-card.featured::before {
                    content: "⭐ Featured";
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 1rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    z-index: 2;
                }

                .blog-card-image {
                    position: relative;
                    height: 200px;
                    overflow: hidden;
                }

                .blog-card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .blog-card:hover .blog-card-image img {
                    transform: scale(1.05);
                }

                .blog-card-overlay {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                }

                .category-badge {
                    color: white;
                    padding: 0.375rem 0.75rem;
                    border-radius: 0.5rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .blog-card-content {
                    padding: 1.5rem;
                }

                .blog-card-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    line-height: 1.4;
                    margin-bottom: 0.75rem;
                }

                .blog-card-title a {
                    color: #1a202c;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .blog-card-title a:hover {
                    color: #667eea;
                }

                .blog-card-description {
                    color: #4a5568;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .blog-card-meta {
                    display: flex;
                    align-items: center;
                    color: #718096;
                    font-size: 0.875rem;
                    margin-bottom: 1.25rem;
                }

                .blog-card-divider {
                    margin: 0 0.5rem;
                }

                .blog-card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #667eea;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .blog-card-link:hover {
                    color: #764ba2;
                    gap: 0.75rem;
                }

                .blog-card-link svg {
                    transition: transform 0.2s ease;
                }

                .blog-card-link:hover svg {
                    transform: translateX(2px);
                }
            `})]})},n=({name:i,count:a,color:s,description:o,href:d})=>{const r=(l=>{switch(l){case"blue":return{background:"linear-gradient(135deg, #3b82f6, #1d4ed8)",iconColor:"#3b82f6"};case"green":return{background:"linear-gradient(135deg, #10b981, #047857)",iconColor:"#10b981"};case"purple":return{background:"linear-gradient(135deg, #8b5cf6, #7c3aed)",iconColor:"#8b5cf6"};case"orange":return{background:"linear-gradient(135deg, #f59e0b, #d97706)",iconColor:"#f59e0b"};case"red":return{background:"linear-gradient(135deg, #ff5656ff, #d11a09ff)",iconColor:"#ff5656ff"};default:return{background:"linear-gradient(135deg, #6b7280, #4b5563)",iconColor:"#6b7280"}}})(s);return e.jsxs("div",{className:"category-badge-card",children:[e.jsxs("a",{href:d,className:"category-link",style:{textDecoration:"none",color:"inherit"},children:[e.jsxs("div",{className:"category-icon",style:{color:r.iconColor},children:[s==="blue"&&e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("title",{children:"blue"}),e.jsx("path",{d:"M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"})]}),s==="green"&&e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("title",{children:"green"}),e.jsx("path",{d:"M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM6 7H18V9H6V7ZM6 11H18V13H6V11ZM6 15H18V17H6V15Z"})]}),s==="purple"&&e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("title",{children:"purple"}),e.jsx("path",{d:"M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"})]}),s==="orange"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#f59e0b",children:[e.jsx("title",{children:"orange"}),e.jsx("path",{d:"M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"})]}),s==="red"&&e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"#EA3323",children:[e.jsx("title",{children:"red"}),e.jsx("path",{d:"m223-120-89-481q-37 7-65.5-17T40-680q0-33 23.5-56.5T120-760q33 0 56.5 23.5T200-680q0 14-4 26t-12 22q22 13 44.5 21.5T276-602q44 0 81.5-22t58.5-60l25-46q-19-11-30-29t-11-41q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 23-11 41t-30 29l25 46q21 38 58.5 60t81.5 22q25 0 47.5-8t44.5-21q-8-10-12-22.5t-4-26.5q0-33 23.5-56.5T840-760q33 0 56.5 23.5T920-680q0 38-28.5 62T826-601l-89 481H223Z"})]})]}),e.jsxs("div",{className:"category-content",children:[e.jsx("h4",{className:"category-name",children:i}),e.jsx("p",{className:"category-description",children:o}),e.jsxs("div",{className:"category-count",children:[e.jsx("span",{className:"count-number",style:{background:r.background},children:a}),e.jsx("span",{className:"count-label",children:"articles"})]})]})]}),e.jsx("style",{children:`
                    .category-badge-card {
                        background: white;
                        border-radius: 1rem;
                        padding: 1.5rem;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                        transition: all 0.3s ease;
                        cursor: pointer;
                        border: 1px solid #e2e8f0;
                    }

                    .category-badge-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        border-color: ${r.iconColor};
                    }

                    .category-icon {
                        margin-bottom: 1rem;
                    }

                    .category-content {
                        text-align: left;
                    }

                    .category-name {
                        font-size: 1.125rem;
                        font-weight: 700;
                        color: #1a202c;
                        margin-bottom: 0.5rem;
                    }

                    .category-description {
                        color: #4a5568;
                        font-size: 0.875rem;
                        line-height: 1.5;
                        margin-bottom: 1rem;
                    }

                    .category-count {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }

                    .count-number {
                        color: white;
                        padding: 0.25rem 0.75rem;
                        border-radius: 1rem;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }

                    .count-label {
                        color: #718096;
                        font-size: 0.875rem;
                    }
                `})]})},b=({children:i})=>e.jsxs("div",{children:[e.jsx("div",{className:"homepage-layout",children:i}),e.jsx("footer",{className:"custom_footer",children:e.jsx("p",{children:"© 2025 Voltade. All rights reserved."})})]}),j={showSidebar:!0,showSponsor:!0,showOutline:!1,showAicta:!1,content:{width:"100%"}};function g(i){const a={a:"a",div:"div",h1:"h1",h2:"h2",p:"p",...m(),...i.components};return e.jsxs(b,{children:[e.jsxs(a.h1,{id:"crm-insights--business-growth-hub",children:["CRM Insights & Business Growth Hub",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#crm-insights--business-growth-hub",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsxs("div",{className:"hero-section",children:[e.jsx("div",{className:"hero-description",children:e.jsx(a.p,{children:`Unlock the power of intelligent customer relationship management with expert insights, automation strategies,
and cutting-edge business tools designed for modern enterprises.`})}),e.jsxs("div",{className:"hero-stats",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-number",children:"50+"}),e.jsx("span",{className:"stat-label",children:"Expert Guides"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-number",children:"10k+"}),e.jsx("span",{className:"stat-label",children:"Monthly Readers"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("span",{className:"stat-number",children:"95%"}),e.jsx("span",{className:"stat-label",children:"Success Rate"})]})]})]}),e.jsxs(a.h2,{id:"featured-articles",children:["Featured Articles",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#featured-articles",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsxs("section",{className:"blog-grid featured-grid",children:[e.jsx(t,{title:"Automated Lead Distribution & Dynamic WhatsApp Messaging",description:"Discover revolutionary CRM features: automated round-robin lead assignment through user groups and interactive WhatsApp messaging with lists, buttons, and CTA links for enhanced customer engagement.",date:"June 11, 2025",category:"Product Updates",readTime:"4 min read",image:"/images/blog/product-updates/round-robin-lead.jpg",link:"/product-updates/round-robin-lead-assignment",featured:!0}),e.jsx(t,{title:"Top AI-Powered CRM Solutions for Singapore Enterprises",description:"Comprehensive analysis of leading AI CRM platforms tailored for Singapore businesses. Compare features, pricing, and ROI potential.",category:"CRM",readTime:"11 min read",date:"May 2025",image:"/images/blog/crm/ai-crm-singapore.jpg",link:"/crm/best-software",featured:!0}),e.jsx(t,{title:"WhatsApp Business Automation: 2025 Implementation Guide",description:"Unlock WhatsApp automation potential for business growth. Learn about features, benefits, use cases, and implementation strategies.",category:"Sales & Marketing",readTime:"9 min read",date:"March 28, 2024",image:"/images/blog/sales-marketing/whatsapp-automation.jpg",link:"/sales-marketing/whatsapp-automation",featured:!0})]}),e.jsxs(a.h2,{id:"product-updates",children:["Product Updates",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#product-updates",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsxs("section",{className:"blog-grid",id:"product-updates",children:[e.jsx(t,{title:"New Year 2025 Feature Release: What's Coming Next",description:"Exciting preview of upcoming features including advanced analytics, team collaboration tools, and enhanced security measures launching in early 2025.",category:"Product Updates",readTime:"6 min read",date:"January 2025",image:"/images/blog/product-updates/2025-feature-preview.jpg",link:"/product-updates/latest-updates"}),e.jsx(t,{title:"Automated Lead Distribution & Dynamic WhatsApp Messaging",description:"Discover revolutionary CRM features: automated round-robin lead assignment through user groups and interactive WhatsApp messaging with lists, buttons, and CTA links for enhanced customer engagement.",date:"June 11, 2025",category:"Product Updates",readTime:"4 min read",image:"/images/blog/product-updates/round-robin-lead.jpg",link:"/product-updates/round-robin-lead-assignment"}),e.jsx(t,{title:"Advanced Chatbot Personas with Cloud Storage Integration",description:"Explore custom chatbot personalities with seamless Google Drive and OneDrive integration for enhanced knowledge management capabilities.",category:"Product Updates",readTime:"4 min read",date:"May 19, 2025",image:"/images/blog/product-updates/custom-chatbot-persona.jpg",link:"/product-updates/chatbot-integration"}),e.jsx(t,{title:"Opportunity Broadcasting & Message Editing Capabilities",description:"Learn about advanced broadcast features for opportunities, enhanced message editing functionality, and improved communication workflows.",category:"Product Updates",readTime:"4 min read",date:"March 29, 2024",image:"/images/blog/product-updates/broadcast-opportunities.jpg",link:"/product-updates/broadcast-features"})]}),e.jsxs(a.h2,{id:"sales--marketing-excellence",children:["Sales & Marketing Excellence",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sales--marketing-excellence",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsxs("section",{className:"blog-grid",id:"sales-marketing",children:[e.jsx(t,{title:"Revolutionary CRM Phone System Integration",description:"Transform team productivity with integrated CRM phone systems. Improve call tracking, follow-ups, and business communication efficiency.",category:"Sales & Marketing",readTime:"8 min read",date:"April 4, 2025",image:"/images/blog/sales-marketing/crm-phone-integration.jpg",link:"/sales-marketing/crm-phone-integration"}),e.jsx(t,{title:"Conversational AI for Sales: Top 8 Implementation Strategies",description:"Comprehensive guide to implementing conversational chatbots in sales and marketing to boost engagement, automate processes, and drive revenue.",category:"Sales & Marketing",readTime:"7 min read",date:"February 19, 2025",image:"/images/blog/sales-marketing/conversational-chatbots.jpg",link:"/sales-marketing/conversational-ai-sales"}),e.jsx(t,{title:"Conversational AI in Sales: 2025 Comprehensive Guide",description:"Explore how Conversational AI transforms sales processes, boosts efficiency, and closes deals faster with advanced automation techniques.",category:"Sales & Marketing",readTime:"12 min read",date:"October 10, 2024",image:"/images/blog/sales-marketing/conversational-ai-guide.jpg",link:"/sales-marketing/conversational-ai-guide"}),e.jsx(t,{title:"10 Critical Sales Management Mistakes to Avoid",description:"Identify and eliminate common sales management pitfalls that hinder team performance. Learn practical solutions for sustainable growth.",category:"Sales & Marketing",readTime:"10 min read",date:"October 25, 2024",image:"/images/blog/sales-marketing/sales-management-mistakes.jpg",link:"/sales-marketing/sales-management-mistakes"}),e.jsx(t,{title:"WhatsApp Business Automation: 2025 Implementation Guide",description:"Unlock WhatsApp automation potential for business growth. Learn about features, benefits, use cases, and implementation strategies.",category:"Sales & Marketing",readTime:"9 min read",date:"March 28, 2024",image:"/images/blog/sales-marketing/whatsapp-automation.jpg",link:"/sales-marketing/whatsapp-automation"}),e.jsx(t,{title:"Essential WhatsApp Business Features for 2025",description:"Comprehensive overview of WhatsApp business capabilities including customer engagement, operational efficiency, and growth optimization.",category:"Sales & Marketing",readTime:"9 min read",date:"September 30, 2024",image:"/images/blog/sales-marketing/whatsapp-business-features.jpg",link:"/sales-marketing/whatsapp-business-features"}),e.jsx(t,{title:"Top 10 Sales Acceleration Tools for Business Growth",description:"Discover essential sales software solutions for lead management, task automation, and accelerated business growth from free to premium options.",category:"Sales & Marketing",readTime:"8 min read",date:"June 14, 2024",image:"/images/blog/sales-marketing/sales-tools.jpg",link:"/sales-marketing/sales-tools"}),e.jsx(t,{title:"5 Essential WhatsApp CRM Techniques for Customer Engagement",description:"Master WhatsApp CRM integration strategies for enhanced customer service, improved efficiency, and measurable business impact.",category:"Sales & Marketing",readTime:"7 min read",date:"April 12, 2024",image:"/images/blog/sales-marketing/whatsapp-crm-techniques.jpg",link:"/sales-marketing/whatsapp-crm-techniques"})]}),e.jsxs(a.h2,{id:"crm-mastery",children:["CRM Mastery",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#crm-mastery",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsxs("section",{className:"blog-grid",id:"crm",children:[e.jsx(t,{title:"CRM 2.0: AI-Powered Customer Relationship Revolution",description:"Explore how artificial intelligence is transforming CRM systems, enabling businesses to enhance customer engagement and operational efficiency.",category:"CRM",readTime:"7 min read",date:"May 30, 2024",image:"/images/blog/crm/crm-ai-revolution.jpg",link:"/crm/ai-crm-revolution"}),e.jsx(t,{title:"Advanced CRM Automation Strategies for Growing Businesses",description:"Unleash CRM automation potential with proven strategies for task streamlining, personalized outreach, and valuable business insights.",category:"CRM",readTime:"10 min read",date:"April 19, 2024",image:"/images/blog/crm/crm-automation-hacks.jpg",link:"/crm/automation-strategies"}),e.jsx(t,{title:"WhatsApp CRM Cost Reduction: 5 Proven Strategies",description:"Discover how WhatsApp CRM integration can significantly reduce business operational costs while improving customer communication efficiency.",category:"CRM",readTime:"6 min read",date:"March 7, 2024",image:"/images/blog/crm/whatsapp-crm-cost-reduction.jpg",link:"/crm/cost-reduction-strategies"}),e.jsx(t,{title:"Ultimate CRM Software Selection Guide for Businesses",description:"Navigate the complex CRM software landscape with expert guidance on selecting the perfect solution for your specific business requirements.",category:"CRM",readTime:"6 min read",date:"February 26, 2024",image:"/images/blog/crm/crm-software-selection.jpg",link:"/crm/software-selection-guide"})]}),e.jsxs(a.h2,{id:"product-support--configuration",children:["Product Support & Configuration",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#product-support--configuration",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsx("section",{className:"blog-grid",id:"product-support",children:e.jsx(t,{title:"Message Module Profile Permissions: Complete Configuration Guide",description:"Comprehensive guide for defining and managing message permissions in CRM systems to enhance communication security and data protection.",category:"Product Support",readTime:"4 min read",date:"August 9, 2024",image:"/images/blog/product-support/profile-permissions.jpg",link:"/product-support/profile-permissions"})}),e.jsxs(a.h2,{id:"grants",children:["Grants",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#grants",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsxs("section",{className:"blog-grid",id:"grants",children:[e.jsx(t,{title:"Singapore SME Grant Troubleshooting Guide 2025: Complete Problem-Solving Manual",description:"Comprehensive troubleshooting guide for Singapore SME grant applications with solutions to common problems, technical issues, and application challenges.",category:"Grants",readTime:"6 min read",date:"July 22, 2025",image:"/images/blog/grants/troubleshooting-singapore.jpg",link:"/grants/singapore-sme-grant-troubleshooting-guide-2025-com"}),e.jsx(t,{title:"Singapore SME Grant Success Stories & Case Studies 2025: Proven Strategies & Winning Applications",description:"Real success stories, case studies, and proven strategies from Singapore SME grant recipients with practical insights for winning applications.",category:"Grants",readTime:"7 min read",date:"July 22, 2025",image:"/images/blog/grants/success-stories-singapore.jpg",link:"/grants/singapore-sme-grant-success-stories-case-studies-2"}),e.jsx(t,{title:"Complete Guide to Singapore SME Grant Comparison & Selection 2025: Strategic Decision Framework",description:"Comprehensive comparison guide for Singapore SME grants with decision frameworks, eligibility matrices, and strategic application planning to maximize funding success.",category:"Grants",readTime:"8 min read",date:"July 22, 2025",image:"/images/blog/grants/grant-comparison-singapore.jpg",link:"/grants/complete-guide-to-singapore-sme-grant-comparison-s"})]}),e.jsxs(a.h2,{id:"categories",children:["Categories",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#categories",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsxs("div",{className:"category-grid",children:[e.jsx(n,{name:"Product Updates",count:"4",color:"blue",description:"Latest features and improvements",href:"#product-updates"}),e.jsx(n,{name:"Sales & Marketing",count:"8",color:"green",description:"Growth strategies and automation",href:"#sales-marketing"}),e.jsx(n,{name:"CRM",count:"4",color:"purple",description:"Customer relationship management",href:"#crm"}),e.jsx(n,{name:"Product Support",count:"1",color:"orange",description:"Technical guides and troubleshooting",href:"#product-support"}),e.jsx(n,{name:"Grants",count:"3",color:"red",description:"Technical guides and troubleshooting",href:"#product-support"})]}),e.jsxs(a.h2,{id:"connect-with-us-",children:["Connect With Us !",e.jsx(a.a,{"aria-hidden":"true",tabIndex:"-1",href:"#connect-with-us-",children:e.jsx(a.div,{"data-autolink-icon":!0})})]}),e.jsx(h,{})]})}function v(i={}){const{wrapper:a}={...m(),...i.components};return a?e.jsx(a,{...i,children:e.jsx(g,{...i})}):g(i)}export{v as default,j as frontmatter};
