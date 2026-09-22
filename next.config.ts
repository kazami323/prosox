import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable next dev's auto-generated AGENTS.md/CLAUDE.md: a tool-written
  // CLAUDE.md at the repo root collides with Claude Code's own
  // project-instructions convention and is out of scope for this migration.
  agentRules: false,
};

export default nextConfig;
