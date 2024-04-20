import ProgressIndicator from "@/components/progress-indicator";
import { AcademicCapIcon, ChatBubbleOvalLeftIcon } from "@heroicons/react/16/solid";

type CtaCardProps = {
  price: number;
  discountPrice?: number;
  quota: number;
  enrolled: number;
  imageUrl: string;
}


const CtaCard = (props: CtaCardProps) => {
  const { price, discountPrice, quota, enrolled, imageUrl } = props;

  return <div className="max-w-sm border border-primary-border rounded-lg overflow-hidden">
    <div className="w-full aspect-[4/3] bg-white">
      <img src={imageUrl} alt="" className="h-full object-cover" />
    </div>
    <div className="flex flex-col gap-4 p-4">
      {/* Price */}
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold text-secondary dark:text-secondary-dark">Rp. {discountPrice?.toLocaleString() || price.toLocaleString()}</p>
        {discountPrice && <p className="text-sm text-secondary-content dark:text-secondary-content-dark line-through">{price.toLocaleString()}</p>}
      </div>
      {/* Quota */}
      <div className="flex flex-col gap-3">
        <ProgressIndicator percentage={(enrolled / quota) * 100} />
        <p className="text-xs text-primary-content dark:text-primary-content-dark">Quota peserta terisi {Math.round((enrolled / quota) * 100)}%</p>
      </div>
      {/* Contact Button */}
      <a
        className="flex justify-center items-center gap-2 w-full py-2 text-sm bg-tertiary-base dark:bg-tertiary-base-dark text-secondary-content dark:text-secondary-content-dark border border-primary-border rounded-lg"
        href="#"
      >
        <ChatBubbleOvalLeftIcon className="w-5 h-5" />
        Contact Us
      </a>
      {/* Enroll Button */}
      {(enrolled < quota) && 
        <a
          className="flex justify-center items-center gap-2 w-full py-2 text-sm bg-gradient-to-b from-emerald-400 to-emerald-600 dark:from-teal-500 dark:to-teal-700 text-primary-content dark:text-primary-content-dark border border-emerald-600 dark:border-teal-700 rounded-lg"
          href="#"
        >
          <AcademicCapIcon className="w-5 h-5" />
          Enroll Bootcamp
        </a>
      }
      {/* Enrolled Count */}
      <div className="flex gap-2 justify-center items-center">
        <div className="isolate flex -space-x-1 overflow-hidden">
          <img
            className="relative z-30 inline-block h-6 w-6 rounded-full ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="relative z-20 inline-block h-6 w-6 rounded-full ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="relative z-10 inline-block h-6 w-6 rounded-full ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <p className="text-sm text-secondary-content dark:text-secondary-content"><span className="font-medium uppercase text-primary-content dark:text-primary-content-dark">156k</span> learners enrolled this Bootcamp</p>
      </div>
    </div>
  </div>
}

export default CtaCard;