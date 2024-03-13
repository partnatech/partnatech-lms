import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react';
import { BootcampCard } from './_components/bootcamp-card';
import { CourseCard } from '@/components/course-card';

const tags = ['Promotions', 'Next', 'Enrolled'];
const bootcampItems = [
  {
    id: 1,
    title: 'Class Promotions',
    category: 'PROMOTIONS',
    embedID: 'X3paOmcrTjQ',
    mentorName: 'mentor-1',
    mentorDescription: 'DA 3+ years',
    owner: 'owner',
    location: 'online',
    period: '01 March - 21 March 2024',
    price: 'Rp.100.000',
    discountPrice: 'Rp.80.000',
    nextStepLink: 'https://google.com',
  },
  {
    id: 2,
    title: 'Class Next',
    category: 'NEXT',
    embedID: 'X3paOmcrTjQ',
    mentorName: 'mentor-2',
    mentorDescription: 'DA 3+ years',
    owner: 'owner',
    location: 'online',
    period: '01 March - 21 March 2024',
    price: 'Rp.100.000',
    nextStepLink: 'https://google.com',
  },
  {
    id: 2,
    title: 'Class Enrolled',
    category: 'ENROLLED',
    embedID: 'X3paOmcrTjQ',
    mentorName: 'mentor-3',
    mentorDescription: 'DA 3+ years',
    owner: 'owner',
    location: 'online',
    period: '01 March - 21 March 2024',
    nextStepLink: '/bootcamp', //LINK BOOTCAMP
  },
];

const BootcampPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center overflow-x-auto space-x-4">
        {tags.map((tag, index) => (
          <button
            key={tag}
            className={cn(
              'px-3 py-1 text-sm font-medium text-neutral-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-50 rounded-md shrink-0',
              {
                'bg-indigo-50 text-indigo-600 dark:bg-indigo-600 dark:text-gray-100':
                  index === 0, // TODO: Set active by selected tags
              }
            )}
          >
            {tag}
          </button>
        ))}
      </div>
      <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Hot Promo
      </h3>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {bootcampItems.map((item) => (
          <CourseCard key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
};

export default BootcampPage;
