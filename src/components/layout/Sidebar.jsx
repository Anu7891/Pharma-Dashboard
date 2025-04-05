'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconContext } from 'react-icons';
import { 
  MdAnalytics, MdCategory, MdShoppingCart, MdStorefront, 
  MdShoppingBasket, MdReviews, MdLocalShipping, MdReceipt,
  MdQuestionAnswer, MdPayment, MdLanguage, MdPerson,
  MdLocalOffer, MdViewCarousel, MdManageAccounts, MdCancel, MdWeb
} from 'react-icons/md';

const sidebarItems = [
  { title: 'Analytics', href: '/analytics', icon: MdAnalytics },
  { title: 'Category', href: '/category', icon: MdCategory },
  { title: 'Product', href: '/product', icon: MdShoppingCart },
  { title: 'Vendors', href: '/vendors', icon: MdStorefront },
  { title: 'All Order', href: '/order', icon: MdShoppingBasket },
  { title: 'Review', href: '/review', icon: MdReviews },
  { title: 'Delivery Partner', href: '/delivery-partner', icon: MdLocalShipping },
  { title: 'Taxes', href: '/taxes', icon: MdReceipt },
  { title: 'QA', href: '/qa', icon: MdQuestionAnswer },
  { title: 'Payment Getway', href: '/payment', icon: MdPayment },
  { title: 'Language', href: '/language', icon: MdLanguage },
  { title: 'Customer', href: '/customer', icon: MdPerson },
  { title: 'Offer', href: '/offer', icon: MdLocalOffer },
  { title: 'Banner Detail', href: '/banner', icon: MdViewCarousel },
  { title: 'Manager Access', href: '/manager', icon: MdManageAccounts },
  { title: 'Cancel Reason', href: '/cancel', icon: MdCancel },
  { title: 'Web Management', href: '/web', icon: MdWeb },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <div className="logo-grid">
              <div className="logo-grid-blue"></div>
              <div className="logo-grid-green"></div>
              <div className="logo-grid-yellow"></div>
              <div className="logo-grid-red"></div>
            </div>
          </div>
          <h1 className="sidebar-logo-text">Pharma</h1>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || 
                           (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.title} className="sidebar-item">
                <Link
                  href={item.href}
                  className={isActive ? 'active' : ''}
                >
                  <span className="sidebar-item-icon">
                    <item.icon />
                  </span>
                  <span className="sidebar-item-text">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}