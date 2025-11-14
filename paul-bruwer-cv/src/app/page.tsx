"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  IconGit,
  IconLinkedIn,
  IconMail,
  IconMap,
  IconRow,
} from "@/components/IconText";
import HamburgerNav from "@/components/HamburgerNav";

export default function Page() {
  useEffect(() => {
    // IntersectionObserver to fade-in sections
    const sections = Array.from(document.querySelectorAll("section"));
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-in");
            obs.unobserve(e.target as Element);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sections.forEach((s) => observer.observe(s));

    // Print button
    const btn = document.createElement("button");
    btn.className = "no-print";
    btn.style.cssText = `
      position: fixed; bottom: 16px; right: 16px;
      background: var(--primary); color: #fff;
      padding: 10px 16px; border: 0; border-radius: 9999px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
      cursor: pointer; font-weight: 600;
    `;
    btn.textContent = "Print CV";
    btn.onclick = () => window.print();
    document.body.appendChild(btn);

    return () => {
      btn.remove();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <HamburgerNav />

      {/* Header */}
      <header className="header">
        <div className="flex-row">
          <div className="avatar">
            <Image
              src="/static/profile.jpg"
              alt="Paul Bruwer"
              width={96}
              height={96}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </div>

          <div>
            <h1 className="h1 gradient-text">Paul Bruwer</h1>
            <h2 className="h2">Senior Backend Engineer</h2>
            <p style={{ color: "#374151", maxWidth: 640, margin: 0 }}>
              Product-minded backend engineer with end-to-end ownership
              experience (APIs, data models, infrastructure, CI/CD). Reliable
              shipper in lean environments. Comfortable reviewing PRs, proposing
              solutions, and mentoring.
            </p>
          </div>
        </div>

        <div className="card pad-6">
          <IconRow icon={<IconMap />}>South Africa (UTC+2)</IconRow>
          <IconRow icon={<IconMail />}>
            <Link href="mailto:paulbruwer56@gmail.com" className="link">
              paulbruwer56@gmail.com
            </Link>
          </IconRow>
          <IconRow icon={<IconLinkedIn />}>
            <Link
              href="https://linkedin.com/in/paul-bruwer-390742130"
              target="_blank"
              className="link"
            >
              linkedin.com/in/paul-bruwer
            </Link>
          </IconRow>
          <IconRow icon={<IconGit />}>
            <Link
              href="https://github.com/paulbruwer"
              target="_blank"
              className="link"
            >
              github.com/paulbruwer
            </Link>
          </IconRow>
        </div>
      </header>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">Core Skills</h2>

        <div className="grid grid-3">
          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Languages/Frameworks</h3>
            <ul className="reset">
              <li>TypeScript (Node.js)</li>
              <li>Express</li>
              <li>Next.js</li>
              <li>Python (basic)</li>
            </ul>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Data</h3>
            <ul className="reset">
              <li>MongoDB (Mongoose)</li>
              <li>Redis</li>
            </ul>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Cloud/DevOps</h3>
            <ul className="reset">
              <li>AWS (ECS, EC2, ALB, VPC, ECR, S3, CloudFront)</li>
              <li>Docker</li>
              <li>CI/CD (Bitbucket Pipelines)</li>
            </ul>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">APIs/Integrations</h3>
            <ul className="reset">
              <li>REST</li>
              <li>Webhooks</li>
              <li>Stripe API</li>
              <li>Meta Graph API</li>
            </ul>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Testing/Docs</h3>
            <ul className="reset">
              <li>Jest</li>
              <li>Supertest</li>
              <li>Swagger/OpenAPI</li>
            </ul>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Practices</h3>
            <ul className="reset">
              <li>Microservices</li>
              <li>Clean code</li>
              <li>Unit/integration tests</li>
              <li>Documentation</li>
              <li>Mentoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience (compact cards) */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>

        <div className="exp-grid">
          {/* Videa Tech */}
          <div className="card pad-8 exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-title">Videa Tech</h3>
                <p className="exp-sub">
                  Senior Backend Engineer &amp; AWS Owner
                </p>
              </div>
              <div className="exp-dates">Aug 2024 - Present</div>
            </div>

            <p className="kicker">
              End-to-end backend + infrastructure ownership across two products
              under Videa Tech.
            </p>

            <ul className="achv">
              <li>
                Designed and shipped Node.js/TypeScript services with MongoDB
                for auth, media, feeds, and analytics.
              </li>
              <li>
                Ran AWS architecture (ECS, ALB, VPC, ECR, S3, CloudFront, SES)
                with serverless ops via Lambda/EventBridge.
              </li>
              <li>
                Built CI/CD (Bitbucket Pipelines → ECS) with
                environment-specific releases and secrets management.
              </li>
              <li>
                Integrated Stripe (intents, webhooks) and Meta (WhatsApp
                templates/webhooks) safely and idempotently.
              </li>
              <li>
                Mentored a junior backend and a junior frontend dev; led PR
                reviews and solution proposals.
              </li>
            </ul>

            <div className="chips">
              <span className="chip">Node.js + TypeScript</span>
              <span className="chip">Express</span>
              <span className="chip">MongoDB (Mongoose)</span>
              <span className="chip">AWS ECS / Lambda</span>
              <span className="chip">EventBridge / SNS</span>
              <span className="chip">Docker</span>
              <span className="chip">CI/CD (Bitbucket)</span>
              <span className="chip">Stripe</span>
              <span className="chip">Meta Graph API</span>
            </div>

            <details className="details">
              <summary>
                <span className="chev">▸</span> Show details
              </summary>
              <div className="details-content">
                <div>
                  <p className="subhead">Responsibilities</p>
                  <ul className="reset">
                    <li>
                      API design, data modeling, observability, performance
                      tuning, and failure recovery.
                    </li>
                    <li>
                      Security: idempotent webhooks, input validation, and
                      defensive rate-limiting where relevant.
                    </li>
                    <li>
                      Operational runbooks and environment hygiene for
                      branch/sandbox/prod.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="subhead">Products</p>
                  <ul className="reset">
                    <li>
                      <Link
                        href="https://aqua-clash.com/"
                        target="_blank"
                        className="link"
                      >
                        <strong>AquaClash</strong>
                      </Link>
                      : Text-based MMO backend (auth, gameplay, leaderboards,
                      notifications); scheduled jobs and hourly aggregations via
                      Lambda/EventBridge.
                    </li>
                    <li>
                      <Link
                        href="https://videa-app.com/"
                        target="_blank"
                        className="link"
                      >
                        <strong>Videa</strong>
                      </Link>
                      : Social video-bounty platform (media uploads via S3
                      presigned URLs, feed/notification services); payment +
                      messaging integrations.
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

          {/* HyperionDev */}
          <div className="card pad-8 exp-card">
            <div className="exp-header">
              <div>
                <h3 className="exp-title">HyperionDev</h3>
                <p className="exp-sub">Coding Mentor</p>
              </div>
              <div className="exp-dates">Apr 2024 - Jul 2024</div>
            </div>

            <p className="kicker">
              Mentored students on software fundamentals, code quality,
              debugging, and problem-solving.
            </p>

            <ul className="achv">
              <li>
                Reviewed assignments and provided structured, actionable
                feedback.
              </li>
              <li>
                Guided best practices: clean code, tests, docs, and incremental
                design.
              </li>
              <li>
                Strengthened communication skills translating complex concepts
                clearly.
              </li>
            </ul>

            <div className="chips">
              <span className="chip">Mentoring</span>
              <span className="chip">Code Reviews</span>
              <span className="chip">Testing Mindset</span>
              <span className="chip">Clean Code</span>
            </div>

            <details className="details">
              <summary>
                <span className="chev">▸</span> Show details
              </summary>
              <div className="details-content">
                <div>
                  <p className="subhead">Focus Areas</p>
                  <ul className="reset">
                    <li>
                      Debugging strategies, problem decomposition, and
                      readability.
                    </li>
                    <li>
                      Feedback loops, documentation, and growth mindsets for
                      juniors.
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Additional Experience (concise, transferable) */}
        <div className="card pad-8 exp-card" style={{ marginTop: "1.25rem" }}>
          <div className="exp-header">
            <h3 className="exp-title">Additional Experience</h3>
          </div>

          {/* Apprentice → Interim Production Manager (pre-HyperionDev) */}
          <div>
            <div className="exp-header">
              <div>
                <h3 className="exp-title">Freedom Paper</h3>
                <p className="exp-sub">
                  Apprentice → Interim Production Manager{" "}
                </p>
              </div>
              <div className="exp-dates">Jan 2017 - Dec 2022 · 6 yrs</div>
            </div>
            <ul className="achv">
              <li>
                Apprenticeship: supported senior operators with daily line
                tasks, checklist-driven quality checks, and basic
                troubleshooting under supervision.
              </li>
              <li>
                Learned core shop-floor processes: safety procedures, materials
                flow, and shift handover routines.
              </li>
              <li>
                Interim role: assisted scheduling and shift coordination during
                coverage periods; escalated incidents and tracked actions
                against KPIs overseen by managers.
              </li>
              <li>
                Contributed to simple SOP updates and small process tidy-ups
                (e.g., clearer handover notes, tool/part labeling).
              </li>
              <li>
                Experience informed later software habits: runbooks, measurable
                quality gates, and reliable release handovers.
              </li>
            </ul>
          </div>

          <div className="chips">
            <span className="chip">Apprenticeship</span>
            <span className="chip">Interim Coordination</span>
            <span className="chip">SOPs &amp; Safety</span>
            <span className="chip">Quality Checks</span>
            <span className="chip">Handover Discipline</span>
          </div>
        </div>
      </section>

      {/* Integrations & Infra */}
      <section id="integrations" className="section">
        <h2 className="section-title">
          Selected Integrations &amp; Infrastructure
        </h2>

        <div className="grid grid-2">
          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Payments</h3>
            <p className="m-0">Stripe payment intents &amp; webhooks</p>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">
              Messaging &amp; Templates
            </h3>
            <p className="m-0">Meta (WhatsApp business templates/webhooks)</p>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Email</h3>
            <p className="m-0">Amazon SES</p>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">
              Eventing &amp; Scheduling
            </h3>
            <p className="m-0">SNS, EventBridge, Lambda</p>
          </div>

          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Media &amp; CDN</h3>
            <p className="m-0">S3 presigned uploads, CloudFront</p>
          </div>
        </div>
      </section>

      {/* Risk Alignment */}
      <section id="risk-alignment" className="section card pad-8">
        <h2 className="section-title">Senior Developer (Risk) Alignment</h2>
        <ul className="modern-list">
          <li>Microservices/API design and implementation</li>
          <li>Serverless architecture with AWS Lambda</li>
          <li>AWS platform experience (ECS, S3, CloudFront, etc.)</li>
          <li>Event-driven systems and queues (SNS, EventBridge)</li>
          <li>Performance optimization and bottleneck resolution</li>
          <li>Strong testing discipline (unit/integration)</li>
          <li>Comprehensive documentation practices</li>
          <li>Mentoring and code review experience</li>
          <li>Startup environment adaptability</li>
          <li>CI/CD pipeline implementation (Bitbucket Pipelines)</li>
        </ul>
      </section>

      {/* Education & Availability */}
      <section id="education" className="grid grid-2">
        <div className="card pad-8">
          <h2 className="section-title">Education</h2>
          <p className="m-0">BSc IT (distance learning)</p>
        </div>
        <div className="card pad-8">
          <h2 className="section-title">Availability</h2>
          <p className="m-0">
            Regular hours, Monday–Friday; comfortable within UTC+0 to UTC+8 core
            daylight windows
          </p>
          <p className="mt-2 m-0">
            Open to fintech and infrastructure-heavy backend roles
          </p>
        </div>
      </section>
    </div>
  );
}
