# ENS Site Template

Minimal Next.js 16 + Omnipin starter for resilient, ENS-linked websites. Pin to three IPFS providers (Pinata + Lighthouse + 4everland) and update the ENS contenthash on every push to `main`.

## Setup

1. **Use this template** (button at top of repo) to create a new repository for your site.

2. **Get an ENS name** at app.ens.domains if you don't have one.

3. **Generate a fresh deploy key** (do NOT reuse your main wallet):
   ```bash
   cast wallet new
   ```
   Fund the address with a small amount of ETH for the contenthash update transactions (~$5-15 in gas per deploy).

4. **(Optional) Create a Safe** at safe.global and transfer ENS name management to it. Recommended for production sites — adds multisig governance to contenthash updates.

5. **Get free pinning provider tokens:**
   - Pinata: https://pinata.cloud
   - Lighthouse: https://lighthouse.storage
   - 4everland: https://4everland.org

6. **Configure GitHub repo** at Settings → Secrets and variables → Actions:

   **Variables** (visible to workflows):
   - `OMNIPIN_ENS` = `yourname.eth`
   - `OMNIPIN_SAFE` = `0x...` (only if using Safe; otherwise leave unset)

   **Secrets** (encrypted):
   - `OMNIPIN_PK` — the fresh private key (with `0x` prefix)
   - `OMNIPIN_PINATA_TOKEN`
   - `OMNIPIN_LIGHTHOUSE_TOKEN`
   - `OMNIPIN_4EVERLAND_TOKEN`

7. **Develop locally:**
   ```bash
   bun install
   bun dev
   ```

8. **Deploy:** push to `main`. The workflow builds the static export, pins to all three providers, and updates ENS (or proposes a Safe transaction if `OMNIPIN_SAFE` is set).

> **Note:** The deploy job is gated on the `OMNIPIN_ENS` variable being set. Until you configure it, the workflow runs but the job is **skipped** (not failed) — so you won't get failure emails on the template itself or on a fresh fork before setup.

## Verify after deploy

- `https://<yourname>.eth.limo`
- `https://<yourname>.eth.link`
- Direct IPFS gateway: `https://ipfs.io/ipfs/<CID>` (CID is in the workflow logs)

## When NOT to use this template

- The site needs server-side rendering or API routes — static export doesn't support them
- The site needs auth/sessions/cookies — host the API separately on regular infra and call it from the client

## References

- Omnipin: https://github.com/omnipin/omnipin
- Omnipin docs: https://omnipin.eth.link
- ENS blog post: https://ens.domains/blog/post/decentralized-websites
