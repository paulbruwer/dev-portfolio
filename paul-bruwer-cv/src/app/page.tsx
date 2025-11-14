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
            <h2 className="h2">
              Senior Backend Engineer &amp; AWS Practitioner
            </h2>
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
            <Link href="mailto:paul@example.com" className="link">
              paul@example.com
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
      <section className="section">
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

          <div className="panel">
            <h3 className="h3 text-secondary mb-2">Data</h3>
            <ul className="reset">
              <li>MongoDB (Mongoose)</li>
              <li>Redis</li>
            </ul>
          </div>

          <div className="panel">
            <h3 className="h3 text-secondary mb-2">Cloud/DevOps</h3>
            <ul className="reset">
              <li>AWS (ECS, EC2, ALB, VPC, ECR, S3, CloudFront)</li>
              <li>Docker</li>
              <li>CI/CD (Bitbucket Pipelines)</li>
            </ul>
          </div>

          <div className="panel">
            <h3 className="h3 text-secondary mb-2">APIs/Integrations</h3>
            <ul className="reset">
              <li>REST</li>
              <li>Webhooks</li>
              <li>Stripe API</li>
              <li>Meta Graph API</li>
            </ul>
          </div>

          <div className="panel">
            <h3 className="h3 text-secondary mb-2">Testing/Docs</h3>
            <ul className="reset">
              <li>Jest</li>
              <li>Supertest</li>
              <li>Swagger/OpenAPI</li>
            </ul>
          </div>

          <div className="panel">
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

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">Experience</h2>

        <div className="card pad-8 mb-10">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div>
              <h3 className="h3">Videa Tech</h3>
              <p style={{ color: "#6B7280", margin: 0 }}>
                Senior Backend Engineer &amp; AWS Owner
              </p>
            </div>
            <div style={{ color: "#6B7280" }}>[Dates per LinkedIn]</div>
          </div>

          <p style={{ color: "#374151", marginTop: 0, marginBottom: "1rem" }}>
            Two products built under Videa Tech with end-to-end backend and
            infrastructure ownership.
          </p>

          <div style={{ display: "grid", gap: "1.25rem" }}>
            <div>
              <h4 className="h4 text-secondary mb-2">
                Responsibilities &amp; Impact
              </h4>
              <ul className="reset">
                <li>
                  Backend architecture &amp; development in Node.js/TypeScript
                  (Express) with MongoDB (Mongoose)
                </li>
                <li>
                  Infrastructure ownership: AWS
                  ECS/EC2/ALB/VPC/ECR/S3/CloudFront/SES; event workflows via SNS
                  &amp; EventBridge; serverless tasks with Lambda
                </li>
                <li>
                  CI/CD: Bitbucket Pipelines to ECS; environment-specific
                  releases; secrets management
                </li>
                <li>
                  Integrations: Stripe (payment flows, webhooks), Meta Graph API
                  (WhatsApp templates/webhooks)
                </li>
                <li>
                  Reliability: idempotent webhooks, structured logging, error
                  handling, observability
                </li>
                <li>
                  Leadership: managed and mentored junior developers; PR
                  reviews; solution proposals
                </li>
              </ul>
            </div>

            <div>
              <h4 className="h4 text-secondary mb-2">Products Shipped</h4>
              <ul className="reset">
                <li>
                  <span className="bold">AquaClash</span> — text-based MMO
                  backend (auth/gameplay data/leaderboards/notifications);
                  scheduled jobs via Lambda/EventBridge
                </li>
                <li>
                  <span className="bold">Videa</span> — social video-bounty
                  platform (feed/media APIs, presigned S3 uploads); payment and
                  messaging integrations
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div>
              <h3 className="h3">HyperionDev</h3>
              <p style={{ color: "#6B7280", margin: 0 }}>Coding Mentor</p>
            </div>
            <div style={{ color: "#6B7280" }}>[Dates per LinkedIn]</div>
          </div>

          <ul className="reset" style={{ marginBottom: 0 }}>
            <li>
              Mentored students in software development fundamentals, code
              quality, debugging, and problem-solving
            </li>
            <li>
              Provided structured feedback on assignments, reviewed code, and
              guided learners toward industry best practices
            </li>
            <li>
              Strengthened communication skills and the ability to translate
              complex concepts clearly
            </li>
          </ul>
        </div>
      </section>

      {/* Integrations & Infra */}
      <section className="section">
        <h2 className="section-title">
          Selected Integrations &amp; Infrastructure
        </h2>

        <div className="grid grid-2">
          <div className="card pad-6">
            <h3 className="h3 text-secondary mb-2">Payments</h3>
            <p className="m-0">Stripe payment intents &amp; webhooks</p>
          </div>

          <div className="panel">
            <h3 className="h3 text-secondary mb-2">
              Messaging &amp; Templates
            </h3>
            <p className="m-0">Meta (WhatsApp business templates/webhooks)</p>
          </div>

          <div className="panel">
            <h3 className="h3 text-secondary mb-2">Email</h3>
            <p className="m-0">Amazon SES</p>
          </div>

          <div className="panel">
            <h3 className="h3 text-secondary mb-2">
              Eventing &amp; Scheduling
            </h3>
            <p className="m-0">SNS, EventBridge, Lambda</p>
          </div>

          <div className="panel">
            <h3 className="h3 text-secondary mb-2">Media &amp; CDN</h3>
            <p className="m-0">S3 presigned uploads, CloudFront</p>
          </div>
        </div>
      </section>

      {/* Risk Alignment */}
      <section className="section card pad-8">
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
      <section className="grid grid-2">
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
