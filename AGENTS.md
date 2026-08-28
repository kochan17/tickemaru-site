# チケまる Site

## System

- Purpose: 商品券・ギフトカードのオンライン販売案内サイト。
- Production URL: `https://tickemaru.com/`
- Git remote: `https://github.com/kochan17/tickemaru-site.git`
- Hosting project ID: `.openai/hosting.json`を正とする。
- This project does not own the order-form Spreadsheet or Apps Script. Those live in sibling repositories `../bachiri` and `../smatchike`.

## Account Boundary

- チケット事業のGoogle Workspaceアカウントは`tickemaru@chikemo.net`。
- サイト内で送信元や連絡先を変更する場合、コードだけで推測せず運用者へ確認する。
- 外部公開、ドメイン、デプロイ、アクセス制御の変更は対象プロジェクトと本番URLを確認する。

## Development

- Runtime: Node.js `>=22.13.0`
- Framework: Next.js/Vinext with Cloudflare tooling.
- Commands: `npm run dev`, `npm run lint`, `npm run build`.
- `app/site-config.ts` is the source of truth for the public site URL and customer-facing links.
- Before completion run the relevant tests, lint, build, `git diff --check`, and a browser check for visible changes.

## Secrets

- Do not commit environment files, API keys, OAuth tokens, cookies, or customer data.
- Do not copy `RESEND_API_KEY` into this site; mail automation belongs to the GAS repositories.
