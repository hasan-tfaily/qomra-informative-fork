import apiService from "./apiService";

const HOME_PAGE_URL = `/api/home-page?populate%5B0%5D=coverImage&populate%5B1%5D=featuredSection&populate%5B2%5D=featuredSection.featuredSection&populate%5B3%5D=portfolio&populate%5B4%5D=portfolio.images&populate%5B5%5D=testemonial&populate%5B6%5D=testemonial.review&populate%5B7%5D=testemonial.review.image&populate%5B8%5D=divider&populate%5B9%5D=contactUsSection`;

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
