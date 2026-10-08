# Bexx AI Academy — Upgraded Website v2

A Next.js + Prisma starter for an AI learning academy selling courses, e-books, PDFs and notes.

## Included
- Student registration/login with secure password hashing and signed session cookie
- SQLite/Prisma database schema for users, products, orders and paid access
- Admin role
- Product creation
- Order workflow: PENDING_VERIFICATION → PAID or REJECTED
- Paid access records created only after admin verification
- Student dashboard
- Responsive storefront

## Local setup
1. Install Node.js 18+.
2. Copy `.env.example` to `.env` and change `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.
3. Run:
   `npm install`
   `npm run db:push`
   `npm run db:seed`
   `npm run dev`
4. Open `http://localhost:3000`.
5. Admin login uses the credentials in `.env`.

## Important production work
This is a serious application starter, but payment/file infrastructure still needs production hardening before taking real money:
- Use managed PostgreSQL instead of SQLite.
- Use a production authentication/session solution or thoroughly audit this auth layer.
- Connect a real payment provider and verify transactions server-to-server/webhook-side. Never trust a customer-entered transaction ID.
- Store paid files in private object storage and issue short-lived signed URLs; do not expose private files in `/public`.
- Add CSRF protection where appropriate, rate limiting, audit logs, email notifications and backups.
- Add admin MFA and least-privilege roles.
- Add upload validation, malware scanning and size limits.
- Add terms, refund policy and privacy policy appropriate to the business and location.
- Test all payment and access paths before launch.

## Suggested payment flow
Customer logs in → selects product → pays through an approved payment channel → provider/webhook confirms payment → order becomes PAID → Access row is created → student can access protected content.

A manually entered transaction reference is useful for reconciliation, but it is not proof of payment by itself.
