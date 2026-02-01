# Discord Bot (Vercel) Dev Notes

This document describes how to run a Discord bot that can process prompts and update the website via GitHub. It assumes the bot is deployed on Vercel and uses GitHub Actions for site builds.

## Overview

The bot listens for messages or slash commands in Discord, processes them (optionally via an AI provider), and then updates the website by:
- creating a PR in the `DROG-group/saufex-website` repo, or
- directly committing to `main` (not recommended), or
- calling a GitHub Action workflow with a payload.

## Architecture (recommended)

1. Discord bot receives a command (e.g., `/update`).
2. Bot parses the prompt, generates content (optional AI call).
3. Bot opens a PR in GitHub with changes.
4. GitHub Actions builds and deploys the site to GitHub Pages.

## Prerequisites

- Discord developer account
- GitHub repo access
- Vercel account
- AI provider key (optional)

## Discord setup

1. Create a new application in Discord Developer Portal.
2. Add a bot user and copy the bot token.
3. Add required bot permissions (send messages, read message history, use slash commands).
4. Invite the bot to your server.

## Secrets / env vars (Vercel)

Set these in Vercel: **Project → Settings → Environment Variables**

Required:
- `DISCORD_BOT_TOKEN`
- `DISCORD_APP_ID`
- `DISCORD_PUBLIC_KEY`
- `DISCORD_GUILD_ID` (if you register guild commands)

If the bot writes to GitHub:
- `GITHUB_TOKEN` (PAT or GitHub App token with repo access)
- `GITHUB_REPO` (e.g., `DROG-group/saufex-website`)

If the bot calls AI:
- `OPENAI_API_KEY` (or another provider)

## GitHub secrets (optional)

If you trigger GitHub Actions via workflow dispatch and the bot runs outside GitHub, you only need the bot's `GITHUB_TOKEN`.
If you prefer Actions-only processing, store any additional secrets in:
**GitHub → Settings → Secrets and variables → Actions**

## Vercel deployment

1. Create a Vercel project (Node.js).
2. Add an API route for Discord interactions (e.g., `api/discord.ts`).
3. Configure Discord interactions endpoint to your Vercel URL.
4. Deploy.

## Suggested command flow

Command: `/update`

Example flow:
1. Validate the prompt.
2. Generate content (if needed).
3. Create a new branch.
4. Commit files into `src/content/blog/`.
5. Open a PR with summary and link to preview (if available).

## Permissions and safety

- Prefer PRs over direct commits.
- Require an allowlist for authors/roles.
- Log all bot actions.

## Local dev

If running locally, use ngrok or similar to expose a public URL for Discord interactions.

## Notes

- GitHub Pages is static; the bot should never be deployed on Pages.
- Keep all tokens in secrets, never in the repo.
