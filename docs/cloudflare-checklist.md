# Cloudflare Production Checklist (JuveniQ)

This checklist covers the minimum DNS, SSL/TLS, security, and caching setup for a professional Cloudflare deployment.
Current stack reference: Netlify (hosting), GoDaddy (domain registrar), Lark (email), and Google Analytics (GA4).

## 1) DNS and Routing

- [ ] Add apex/root record for domain (`A` or `CNAME` flattening) and set it to `Proxied`.
- [ ] Add `www` record (`CNAME` to apex or hosting target) and set it to `Proxied`.
- [ ] Add any required subdomains (`api`, `staging`, etc.) with explicit proxy decisions.
- [ ] Enable `DNSSEC` after DNS records are stable.

## 2) SSL/TLS

- [ ] Set SSL/TLS mode to `Full (strict)`.
- [ ] Install a valid origin certificate on the hosting origin.
- [ ] Enable `Always Use HTTPS`.
- [ ] Enable `Automatic HTTPS Rewrites`.
- [ ] Set minimum TLS version to `1.2` or higher.
- [ ] Enable HSTS only after confirming HTTPS works on all routes.

## 3) Edge Security

- [ ] Enable Cloudflare Managed WAF rules.
- [ ] Enable Bot Fight Mode (or Super Bot Fight Mode on paid plan).
- [ ] Add rate-limiting rule for contact form endpoint traffic spikes.
- [ ] Block obvious bad methods on static routes where unnecessary.
- [ ] Restrict admin/staging paths with Cloudflare Zero Trust (optional but recommended).

## 4) Security Headers

Set at origin or via Cloudflare Transform/Rules:

- [ ] `Content-Security-Policy` (tighten over time; start with reporting mode if needed).
- [ ] `X-Frame-Options: DENY` (or `SAMEORIGIN` if embedding is required).
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`.
- [ ] `Permissions-Policy` with only required browser features.
- [ ] `X-Content-Type-Options: nosniff`.

## 5) Caching and Performance

- [ ] Cache static assets aggressively (`/assets/*`, images, fonts) with long TTL.
- [ ] Keep HTML caching conservative unless explicit cache invalidation strategy exists.
- [ ] Enable Brotli compression.
- [ ] Enable HTTP/3 and 0-RTT where compatible with origin/session handling.
- [ ] Validate cache behavior after each production deploy.

## 6) Monitoring and Operations

- [ ] Enable Cloudflare analytics/observability for traffic and threat insights.
- [ ] Configure uptime monitoring and alerting on origin availability.
- [ ] Verify SSL certificate renewal monitoring.
- [ ] Test from multiple regions and mobile networks before go-live.

## 7) Go-Live Validation

- [ ] `https://` resolves correctly for apex and `www`.
- [ ] Redirect behavior is consistent (`www` -> apex or apex -> `www`).
- [ ] Contact form reachable and rate-limited.
- [ ] No mixed-content warnings in browser.
- [ ] Security headers visible in response checks.
- [ ] SEO-critical pages remain crawlable after WAF/bot settings.
