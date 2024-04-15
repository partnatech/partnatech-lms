import { BootcampDetailHeader } from "@/components/bootcamp/bootcamp-header";
import { Breadcrumb, BreadcrumbPage } from "@/components/breadcrumb";
import { Tab, Tabs } from "@/components/tabs";
import { CheckIcon } from "@heroicons/react/16/solid";

const bootcamp = {
  title: 'Bootcamp Data Science dan Data Analyst for Beginner',
  description: 'Learn the basics of Data Analysis & key foundational concepts with this online intro Learning Path.',
  period: '11 Mar - 11 Apr 2024',
  location: 'Online',
  level: 'Beginner',
  about: 'Data Analyst menjadi profesi dengan urutan pertama, yang paling dibutuhkan pada tahun 2030 menurut World Economic Forum. Bersiap kembangkan karir melalui pelatihan online secara intensif dan live di Bootcamp Data Analysis. Belajar bersama mentor expert dari Top Companies, dimulai dari level dasar hingga lanjut.',
  benefits: [
    '17x sesi live class bersama mentor experts dari top companies',
    'Tutor berpengalaman dengan level Lead/Manager/Head',
    'Latihan dan praktik di tiap sesi',
    'Sesi sharing pengalaman bersama praktisi',
    'Real Portfolio Project',
    'Mendapat rekaman video setiap Sesi untuk dipelajari Kembali.',
    'Mendapatkan e-Certificate selesai pelatihan.',
    'Special award untuk tim terbaik.',
  ],
}

const BootcampDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const pages: BreadcrumbPage[] = [
    { name: 'Bootcamp', href: '/dashboard/bootcamp', current: false },
    { name: 'Bootcamp Detail', href: `/dashboard/bootcamp/${slug}`, current: true },
  ];

  const tabs: Tab[] = [
    { name: 'About', href: `#about`, current: true },
    { name: 'Benefit', href: `#benefit`, current: false },
    { name: 'Mentor', href: `#mentor`, current: false },
    { name: 'Schedule', href: `#schedule`, current: false },
    { name: 'Curriculum', href: `#curriculum`, current: false },
  ];

  return <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8">
    <div className="flex flex-col gap-6 flex-1">
      <Breadcrumb pages={pages} />
      <BootcampDetailHeader
        title={bootcamp.title}
        description={bootcamp.description}
        period={bootcamp.period}
        location={bootcamp.location}
        level={bootcamp.level}
      />
      <div className="flex flex-col gap-12 sticky top-64">
        <Tabs tabs={tabs} />
        {/* About */}
        <div id="about" className="prose">
          <h2 className="text-2xl font-semibold text-primary-content dark:text-primary-content-dark mb-4">About Bootcamp</h2>
          <p className="text-sm text-secondary-content dark:text-secondary-content-dark">
            {bootcamp.about}
          </p>
        </div>
        {/* Benefit */}
        <div id="benefit" className="prose">
          <h2 className="text-2xl font-semibold text-primary-content dark:text-primary-content-dark mb-4">Bootcamp Benefit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bootcamp.benefits.map((benefit, idx) => (
              <div key={`benefit-${idx}`} className="flex items-center gap-2 text-sm text-secondary-content dark:text-secondary-content-dark">
                <CheckIcon className="w-4 h-4 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Right Pane Placeholder */}
    <div className="sticky top-20 hidden w-96 shrink-0 lg:block bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-primary-content dark:text-primary-content-dark mb-4">Bootcamp Card</h3>
      <p className="text-sm text-secondary-content dark:text-secondary-content-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget euismod nibh. Nullam euismod, turpis nec vehicula.</p>
    </div>
  </div>
}

export default BootcampDetailPage;