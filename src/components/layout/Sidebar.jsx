'use client';
import { APP_LOGO, CATEGORY_LOGO, CUSTOMER_LOGO, DATA_ANALYTICS_LOGO, DELIVERY_LOGO, DISCOUNT_LOGO, LANGUAGE_ICON, ORDER_LOGO, PAYMENT_LOGO, PRODUCTS_LOGO, PURCHASE_ORDER_LOGO, QUESTION_ANSWER_LOGO, REVIEW_LOGO, TAX_LOGO, VENDOR_LOGO } from '@/config/image-config';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  MdAnalytics, MdCategory, MdShoppingCart, MdStorefront, 
  MdShoppingBasket, MdReviews, MdLocalShipping, MdReceipt,
  MdQuestionAnswer, MdPayment, MdLanguage, MdPerson,
  MdLocalOffer, MdViewCarousel, MdManageAccounts, MdCancel, MdWeb
} from 'react-icons/md';
import CustomImage from '../custom-image/custom-image';

const sidebarItems = [
  { title: 'Analytics', href: '/analytics', imagePath: DATA_ANALYTICS_LOGO },
  { title: 'Category', href: '/category', imagePath: CATEGORY_LOGO },
  { title: 'Product', href: '/product', imagePath: PRODUCTS_LOGO },
  { title: 'Vendors', href: '/vendors', imagePath: VENDOR_LOGO },
  { title: 'All Order', href: '/order', imagePath: PURCHASE_ORDER_LOGO },
  { title: 'Review', href: '/review', imagePath: REVIEW_LOGO },
  { title: 'Delivery Partner', href: '/delivery-partner', imagePath: DELIVERY_LOGO},
  { title: 'Taxes', href: '/taxes', imagePath: TAX_LOGO },
  { title: 'QA', href: '/qa', imagePath: QUESTION_ANSWER_LOGO},
  { title: 'Payment Getway', href: '/payment', imagePath: PAYMENT_LOGO },
  { title: 'Language', href: '/language', imagePath: LANGUAGE_ICON },
  { title: 'Customer', href: '/customer', imagePath: CUSTOMER_LOGO },
  { title: 'Offer', href: '/offer', imagePath: DISCOUNT_LOGO },
  
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sidebar-container bg-white h-screen border-r border-gray-200 overflow-y-auto">
      <div className="py-4 px-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <CustomImage 
          src={APP_LOGO} 
          alt="App Logo" 
          width={50} 
          height={50}
          priority={true}
          unoptimized
          />
          <h1 className="font-bold app_logo_color text-4xl">Pharma</h1>
        </div>
      </div>
      
      <nav className="mt-2">
        <ul className="space-y-1 px-5  py-2">
          {sidebarItems.map((item,index) => {
            const isActive = pathname === item.href || 
                           (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 my-1 rounded-md  ${
                    isActive 
                      ? 'active_bg_color text-white' 
                      : 'roboto_regular font-medium theme_color hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">
                    {item.imagePath ? (
                      <div className={`w-5 h-5 relative ${isActive ? 'svg-white' : 'svg-normal'}`}>
                        <CustomImage 
                          src={item.imagePath} 
                          alt={item.title}
                          width={20}
                          height={20}
                          className="object-contain transition-all duration-200"
                          priority={[0,1,2,3,4,5,6,7,8,9,10]?.includes(index)}
                        />
                      </div>
                    ) : (
                      <item.icon />
                    )}
                  </span>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <style jsx global>{`
      
      `}</style>
    </div>
  );
};

export default Sidebar;