"use client";

import { Mail, MapPin, GitHub, Linkedin } from "react-feather";
import { ReactNode } from "react";

export function IconRow({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "8px",
      }}
    >
      <span className="text-secondary" style={{ display: "inline-flex" }}>
        {icon}
      </span>
      <span>{children}</span>
    </div>
  );
}

export const IconMail = () => <Mail size={18} />;
export const IconMap = () => <MapPin size={18} />;
export const IconGit = () => <GitHub size={18} />;
export const IconLinkedIn = () => <Linkedin size={18} />;
