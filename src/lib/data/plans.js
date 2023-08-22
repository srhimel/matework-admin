const plans = [
  {
    name: 'Free',
    legacyName: 'Navidium Free Plan',
    title: 'For trial purpose',
    price: `0`,
    order: `50`,
    plan_id: `1`,
    endpoint: '/api/billing/free'
  },
  {
    name: 'Essential',
    legacyName: 'Navidium Essential Plan',
    title: 'For growing stores',
    price: `29.99`,
    order: `500`,
    plan_id: `2`,
    endpoint: '/api/billing/paid',
    trialDays: `14`
  },
  {
    name: 'Growth',
    legacyName: 'Navidium Growth Plan',
    title: 'For growing stores',
    price: `49.99`,
    order: `1000`,
    plan_id: `3`,
    trialDays: `14`,
    endpoint: '/api/billing/paid'
  },
  {
    name: 'Enterprise',
    legacyName: 'Navidium Enterprise - PLUS Plan',
    title: 'Enterprise level solution',
    price: `99.99`,
    plan_id: `5`,
    order: `99999`,
    endpoint: '/api/billing/paid',
    trialDays: `14`
  }
]

export default plans
