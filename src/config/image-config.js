// Base paths for images
const BASE_PATH = "/images/sidebar";  
const BASE_PATH_ICONS = "/images/icons";

// Helper function to get correct path based on environment
const getPath = (path) => {
  if (typeof window !== 'undefined') {
    const isVercel = !window.location.hostname.includes('github.io') && 
      !window.location.hostname.includes('localhost');
    return isVercel ? path : `/Pharma-Dashboard${path}`;
  }
  // For SSR/build time, use process.env to determine environment
  return process.env.VERCEL ? path : `/Pharma-Dashboard${path}`;
};

// Export image paths
export const APP_LOGO = getPath(`${BASE_PATH}/app-logo.svg`);
// export const APP_LOGO = getPath(`${BASE_PATH}/apps.svg`);
export const CUSTOMER_LOGO = getPath(`${BASE_PATH}/customer.svg`);
export const ANALYTICS_LOGO = getPath(`${BASE_PATH}/data-analytics.svg`);
export const DELIVERY_LOGO = getPath(`${BASE_PATH}/delivery.svg`);
export const OFFER_LOGO = getPath(`${BASE_PATH}/discount.svg`);
export const LANGUAGE_LOGO = getPath(`${BASE_PATH}/language.svg`);
export const PAYMENT_LOGO = getPath(`${BASE_PATH}/payment.svg`);
export const PLACARD_LOGO = getPath(`${BASE_PATH}/placard.svg`);
export const PRODUCTS_LOGO = getPath(`${BASE_PATH}/products.svg`);
export const QA_LOGO = getPath(`${BASE_PATH}/qa.svg`);
export const VENDORS_LOGO = getPath(`${BASE_PATH}/vendor.svg`);
export const TAXES_LOGO = getPath(`${BASE_PATH}/taxes.svg`);
export const REVIEW_LOGO = getPath(`${BASE_PATH}/review.svg`);
export const CATEGORY_LOGO = getPath(`${BASE_PATH}/categories.svg`);
export const ALL_ORDER_LOGO = getPath(`${BASE_PATH}/delivery.svg`);


// icons - also apply getPath to icons for consistency
export const SEARCH_ICON = getPath(`${BASE_PATH_ICONS}/search.svg`);
export const EDIT_ICON = getPath(`${BASE_PATH_ICONS}/attribute-group.svg`);
export const SORT_ASC_ICON = getPath(`${BASE_PATH_ICONS}/sort-asc.svg`); 
export const SORT_DESC_ICON = getPath(`${BASE_PATH_ICONS}/sort-desc.svg`); 
export const ACTIONS_ICON = getPath(`${BASE_PATH_ICONS}/actions.svg`);






