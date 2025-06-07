import getBaseUrl from "@/utils/getBaseUrl";
import {
  aboutPageQuery,
  blogQuery,
  blogsQuery,
  globalQuery,
  homePageQuery,
  paginateBlogsQuery,
} from "@/utils/query";

const getFetch = async (path: string, query: string) => {
  try {
    const baseUrl = getBaseUrl();
    if (!baseUrl) {
      throw new Error("Base URL is not defined");
    }

    const url = new URL(path, baseUrl);
    url.search = query;

    const response = await fetch(url.href);

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      const error = data?.error || { message: "Failed to fetch data" };
      throw new Error(error.message, {
        cause: {
          status: response.status,
          error,
        },
      });
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

const getGlobalContent = async () => {
  const path = "/api/global";
  const data = await getFetch(path, globalQuery);
  return data;
};

const getHomePageContent = async () => {
  const path = "/api/home-page";
  const data = await getFetch(path, homePageQuery);
  return data;
};

const getPaginatedBlogs = async (page: number) => {
  const path = "/api/blogs";
  const pageSize = 9;
  const data = await getFetch(path, paginateBlogsQuery(page, pageSize));
  return data;
};


const getBlogs = async () => {
  const path = "/api/blogs";
  const data = await getFetch(path, blogsQuery);
  return data;
}

const getBlog = async (documentId: string) => {
  const path = `/api/blogs/${documentId}`;
  const data = await getFetch(path, blogQuery);
  return data;
};

const getAboutPageContent = async () => {
  const path = "/api/about-page";
  const data = await getFetch(path, aboutPageQuery);
  return data;
};

export {
  getGlobalContent,
  getHomePageContent,
  getBlogs,
  getBlog,
  getAboutPageContent,
  getPaginatedBlogs
};
