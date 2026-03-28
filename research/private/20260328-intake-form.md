# Pre-Booking Intake Form

## Status
- Cal.com is confirmed self-hosted at booking.digitaloa.ch ✅
- API is accessible but requires authentication for event type queries

## Implementation Options

### Option A: Cal.com Built-in Forms (simplest)
Uses Cal.com's native "routing forms" or custom booking questions.
- Go to: booking.digitalcoa.ch/routing-forms
- Configure custom questions in each event type

### Option B: Custom Form → Webhook → CRM
1. Create form on your Node.js server (first-party)
2. Webhook posts to Cal.com or CRM

### Option C: External Form → Cal.com Redirect
- Typeform or custom form
- Redirect to Cal.com with pre-filled data

## Proposed Fields

### Must have
- Name
- Email (business)
- Company
- Role

### Differentiators
- Primary challenge (dropdown)
- Timeline (dropdown)
- Budget range (dropdown)

### Nice to have
- How did you find me?
- One thing I can help with

---

## Next Steps
1. Choose option (A, B, or C)
2. Decide fields to include
3. I build/configure
