export const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: 'Free Plan',
      id: 'tier-free',
      href: '#',
      price: { monthly: 'Rp 0', annually: 'Rp 0' },
      description:
        'Access to introductory courses to kickstart your learning journey.',
      features: [
        'Access to 5 introductory courses',
        'Community support',
        'Basic progress tracking',
      ],
      mostPopular: false,
    },
    {
      name: 'Paid Plan',
      id: 'tier-paid',
      href: '#',
      price: { monthly: 'Rp 200,000', annually: 'Rp 1,000,000' },
      description:
        'Full access to all courses and premium features for committed learners.',
      features: [
        'Access to all courses',
        'Up to 20,000 subscribers',
        'Advanced progress tracking and analytics',
        '24/7 premium support',
        'Exclusive member resources and webinars',
      ],
      mostPopular: true,
    },
  ],
};
