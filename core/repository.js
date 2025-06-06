import apiService from "./apiService";

const HOME_PAGE_URL = `/api/home-page?populate%5B0%5D=coverImage&populate%5B1%5D=featuredSection&populate%5B2%5D=featuredSection.featuredSection&populate%5B3%5D=portfolio&populate%5B4%5D=portfolio.images&populate%5B5%5D=testemonial&populate%5B6%5D=testemonial.review&populate%5B7%5D=testemonial.review.image&populate%5B8%5D=divider&populate%5B9%5D=contactUsSection`;
const ABOUTUS_URL = `/api/about-us?populate%5B0%5D=aboutUsHeader&populate%5B1%5D=aboutUsHeader.coverImage&populate%5B2%5D=mission&populate%5B3%5D=mission.image&populate%5B4%5D=vision&populate%5B5%5D=vision.image&populate%5B6%5D=Testimonials&populate%5B7%5D=Testimonials.review&populate%5B8%5D=Testimonials.review.image&populate%5B9%5D=divider&populate%5B10%5D=divider2`;
const SERVICES_URL = `/api/services-page?populate%5B0%5D=servicesHeaderSection&populate%5B1%5D=servicesHeaderSection.image&populate%5B2%5D=QomraCreation&populate%5B3%5D=QomraCreation.image&populate%5B4%5D=services&populate%5B5%5D=services.image&populate%5B6%5D=services.service&populate%5B7%5D=Equipment&populate%5B8%5D=Equipment.image`;
const STUDIO_URL = `/api/studio-gallery?populate%5B0%5D=list&populate%5B1%5D=list.image`;
const EVENTS_URL = `/api/events-and-workshop?populate%5B0%5D=whatWeDo&populate%5B1%5D=whatWeDo.image&populate%5B2%5D=upcoming&populate%5B3%5D=upcoming.images&populate%5B4%5D=coverImage&populate%5B5%5D=upcomingEvent&populate%5B6%5D=upcomingEvent.image`;
const PRICE_URL = `/api/pricing?populate%5B0%5D=image&populate%5B1%5D=pricing&populate%5B2%5D=pricing.prices`;
const BLOGLIST_URL = `/api/blogs?populate%5B0%5D=coverImage`;
const CATYFILTER = `/api/blogs?populate=coverImage&filters[category][title][$eq]=`;
const SERVICES = `/api/service-details?`;
const BLOG_URL = `/api/blogs?filters[documentId][$eq]=`;
const SERVICE_DETAILS = `/api/service-details?filters[documentId][$eq]=`;
const CONTACT_US_URL = `/api/contact-us?populate%5B0%5D=coverImage`;
const BOOKING_URL = `/api/booking-page?populate%5B0%5D%3D=coverImage`;

const token = `Bearer bb3e1343a51f3bd53340b17ddde2a4df6c19192212173f51b0e7312a6b0289ab1fbdd9da9c6c16de4bac74418048152eb6a7ade5ff8ef6987e412e449efda5e20e365218dee516e8e797b77c45f7ba9c97892f5c27c3e74cfe3633b182621d4cf5f805f8ddb139f2ebe1b48e320340d5f52dc56c58b165bc37d2cdf2719dfa0b`;

apiService.setToken(token);
const addQueryParam = (url, paramName, paramValue) => {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}${paramName}=${paramValue}`;
};

export const getHomePage = async (locale = "en") => {
  try {
    const url = addQueryParam(HOME_PAGE_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};

export const getBookingPage = async (locale = "en") => {
  try {
    const url = addQueryParam(BOOKING_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};

export const getCcontactUsPage = async (locale = "en") => {
  try {
    const url = addQueryParam(CONTACT_US_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
export const getAboutUsPage = async (locale = "en") => {
  try {
    const url = addQueryParam(ABOUTUS_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
export const getServicesPage = async (locale = "en") => {
  try {
    const url = addQueryParam(SERVICES_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};

export const getServices = async (locale = "en") => {
  try {
    const url = addQueryParam(SERVICES, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};

export const getServicesDetails = async (documentID, locale = "en") => {
  try {
    let url = `${SERVICE_DETAILS}${
      (await documentID).id
    }&populate%5B0%5D=coverImage&populate%5B1%5D=aboutService&populate%5B2%5D=aboutService.image&populate%5B3%5D=ourServicce&populate%5B4%5D=ourServicce.image`;

    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
export const getStudioPage = async (locale = "en") => {
  try {
    const url = addQueryParam(STUDIO_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
export const getEventsPage = async (locale = "en") => {
  try {
    const url = addQueryParam(EVENTS_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
export const getPricingPage = async (locale = "en") => {
  try {
    const url = addQueryParam(PRICE_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
export const getBlogsPage = async (locale = "en") => {
  try {
    const url = addQueryParam(BLOGLIST_URL, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};

export const getBlogDetailsPage = async (documentID, locale = "en") => {
  try {
    let url = `${BLOG_URL}${documentID}&populate%5B0%5D=coverImage&populate%5B1%5D=paragraph&populate%5B2%5D=Gallery&populate%5B3%5D=category`;
    url = addQueryParam(url, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
export const getCatygoryFILTER = async (tag, locale = "en") => {
  try {
    const url = addQueryParam(`${CATYFILTER}${tag}`, "locale", locale);
    const response = await apiService.get(url, null, {
      next: { revalidate: 5000 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    throw error;
  }
};
