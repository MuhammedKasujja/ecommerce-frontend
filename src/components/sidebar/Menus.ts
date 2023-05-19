const menus = [
  {
    url: "dashboard",
    name: "Dashboard",
    icon: "desktop",
    gate: undefined,
  },
  {
    navheader: "Order Management",
  },
  {
    url: "#",
    name: "Orders",
    icon: "users",
    gate: "passengers.index",
    submenu: [
      {
        url: "/orders",
        name: "All",
        gate: "passengers.index",
      },
      {
        url: "/orders/pending",
        name: "Pending",
        gate: "passengers.save",
      },
      {
        url: "/orders/confirmed",
        name: "Confirmed",
        gate: "passengers.index",
      },
      {
        url: "orders/processing",
        name: "Processing",
        gate: "passengers.save",
      },
      {
        url: "orders/out-for-delivery",
        name: "Out for delivery",
        gate: "passengers.index",
      },
      {
        url: "orders/delivered",
        name: "Delivered",
        gate: "passengers.save",
      },
      {
        url: "orders/returned",
        name: "Returned",
        gate: "passengers.index",
      },
      {
        url: "orders/failed",
        name: "Failed",
        gate: "passengers.save",
      },
      {
        url: "orders/canceled",
        name: "Canceled",
        gate: "passengers.save",
      },
    ],
  },
  {
    navheader: "PRODUCT MANAGEMENT",
  },
  {
    url: "#",
    name: "Brands",
    icon: "envelope-pull",
    gate: "providers.index",
    submenu: [
      {
        url: "/brands/add",
        name: "Add new",
        gate: "providers.save",
      },
      {
        url: "/brands",
        name: "list",
        gate: "providers.index",
      },
    ],
  },
  {
    url: "#",
    name: "Categories",
    icon: "grid",
    gate: "managers.index",
    submenu: [
      {
        url: "/categories",
        name: "Categories",
        gate: "managers.index",
      },
      {
        url: "/sub-categories",
        name: "Sub category",
        gate: "managers.save",
      },
      {
        url: "/sub-sub-category",
        name: "Sub sub category",
        gate: "managers.save",
      },
    ],
  },
  {
    url: "/attributes",
    name: "Attributes",
    icon: "grid",
    gate: "managers.save",
  },
  {
    url: "#",
    name: "InHouse Products",
    icon: "grid",
    gate: "sub_admins.index",
    submenu: [
      {
        url: "/products/in-house",
        name: "Products",
        gate: "sub_admins.index",
      },
      {
        url: "/bulk-import",
        name: "Bulk import",
        gate: "sub_admins.save",
      },
      {
        url: "/bulk-export",
        name: "Bulk Export",
        gate: "sub_admins.save",
      },
    ],
  },
  {
    url: "#",
    name: "Seller Products",
    icon: "grid",
    gate: "sub_admins.index",
    submenu: [
      {
        url: "/products/seller/new",
        name: "New Products",
        gate: "sub_admins.index",
      },
      {
        url: "/products/seller/approved",
        name: "Approved Products",
        gate: "sub_admins.save",
      },
      {
        url: "/products/seller/denied",
        name: "Denied Products",
        gate: "sub_admins.save",
      },
    ],
  },
  ///////// MARKETING SECTION ////////////////
  {
    navheader: "MARKETING SECTION",
    gate: "bookings.dashboard",
  },
  {
    url: "/stock",
    name: "Product Stock",
    icon: "notebook",
    gate: "bookings.dashboard",
  },
  {
    url: "/reviews",
    name: "Customer Reviews",
    icon: "check-alt",
    gate: "requests.index",
  },
  {
    url: "/wish-list",
    name: "Product in wish list",
    icon: "notebook",
    gate: "bookings.dashboard",
  },
  {
    url: "/transactions",
    name: "Transactions",
    icon: "check-alt",
    gate: "requests.index",
  },
  ///////// USER SECTION ////////////////
  {
    navheader: "USER SECTION",
    gate: "bookings.dashboard",
  },
  {
    url: "#",
    name: "Seller",
    icon: "envelope-pull",
    gate: "reviews.users",
    submenu: [
      {
        url: "/sellers",
        name: "List",
        gate: "reviews.users",
      },
      {
        url: "/seller/withdraws",
        name: "Withdraws",
        gate: "reviews.providers",
      },
    ],
  },
  {
    url: "/customers",
    name: "Customers",
    icon: "check-alt",
    gate: "requests.index",
  },
  ///////// SUPPORT SECTION ////////////////
  {
    navheader: "SUPPORT SECTION",
    gate: "bookings.dashboard",
  },
  {
    url: "/messages",
    name: "Messages",
    icon: "check-alt",
    gate: "requests.index",
  },
  {
    url: "/support-tickets",
    name: "Support ticket",
    icon: "check-alt",
    gate: "requests.index",
  },
  ///////// BUSINESS SETTINGS ////////////////
  {
    navheader: "BUSINESS SETTINGS",
    gate: "bookings.dashboard",
  },
  {
    url: "/seller-settings",
    name: "Seller Settings",
    icon: "check-alt",
    gate: "requests.index",
  },
  {
    url: "/payment-methods",
    name: "Payment method",
    icon: "check-alt",
    gate: "requests.index",
  },
  {
    url: "/sms-module",
    name: "SMS module",
    icon: "check-alt",
    gate: "requests.index",
  },

  {
    url: "#",
    name: "Shipping method",
    icon: "envelope-pull",
    gate: "service_types.index",
    submenu: [
      {
        url: "/shipping-methods",
        name: "list",
        gate: "service_types.index",
      },
      {
        url: "/shipping-methods/settings",
        name: "Settings",
        gate: "service_types.save",
      },
    ],
  },
  {
    url: "/languages",
    name: "Languages",
    icon: "check-alt",
    gate: "requests.index",
  },
  {
    url: "/social-login",
    name: "Social Login",
    icon: "check-alt",
    gate: "requests.index",
  },
  {
    url: "/currecies",
    name: "Currencies",
    icon: "check-alt",
    gate: "requests.index",
  },
  ///////// End BUSINESS SETTINGS ////////

  {
    navheader: "WEB & APP SETTINGS",
    gate: "revenues.dashboard",
  },
  {
    url: "/web-config",
    name: "Web config",
    icon: "check-alt",
    gate: "payments.index",
  },
  {
    url: "/mail-config",
    name: "Mail config",
    icon: "check-alt",
    gate: "payments.index",
  },
  {
    url: "/notifications",
    name: "Notifications",
    icon: "pulse",
    gate: "revenues.dashboard",
  },
  {
    url: "#",
    name: "Page setup",
    icon: "check-alt",
    gate: "promo_codes.index",
    submenu: [
      {
        url: "/terms-and-conditions",
        name: "Terms and conditions",
        gate: "promo_codes.index",
      },
      {
        url: "/privacy-policy",
        name: "Privacy policy",
        gate: "promo_codes.save",
      },
      {
        url: "/about-us",
        name: "About us",
        gate: "promo_codes.index",
      },
      {
        url: "/faq",
        name: "Faq",
        gate: "promo_codes.save",
      },
    ],
  },
  {
    url: "/social-media",
    name: "Social media",
    icon: "check-alt",
    gate: "payments.index",
  },

  ///////// REPORT& ANALYTICS ////////////////
  {
    navheader: "REPORT& ANALYTICS",
    gate: "wallets.dashboard",
  },
  {
    url: "/earnings-report",
    name: "Earning Report",
    icon: "envelope-pull",
    gate: "wallets.user.index",
  },
  {
    url: "/order-report",
    name: "Order Report",
    icon: "comments",
    gate: "wallets.provider.index",
  },
  {
    url: "#",
    name: "Sale report",
    icon: "check-alt",
    gate: "promo_codes.index",
    submenu: [
      {
        url: "/sales/inhouse",
        name: "Inhouse Sale",
        gate: "promo_codes.index",
      },
      {
        url: "/sales/seller",
        name: "Seller Sale",
        gate: "promo_codes.save",
      },
    ],
  },
  ///////// EMPLOYEE SECTION ////////////////
  {
    navheader: "EMPLOYEE SECTION",
    gate: "wallets.dashboard",
  },
  {
    url: "/employees/role",
    name: "Employee role",
    icon: "check-alt",
    gate: "wallets.user.payments",
  },
  {
    url: "#",
    name: "Employees",
    icon: "check-alt",
    gate: "promo_codes.index",
    submenu: [
      {
        url: "/employees/add",
        name: "Add new",
        gate: "promo_codes.index",
      },
      {
        url: "/employees/list",
        name: "List",
        gate: "promo_codes.save",
      },
    ],
  },
];

export default menus;
