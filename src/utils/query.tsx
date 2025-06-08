import qs from "qs";

const homePageQuery = qs.stringify({
  populate: {
    heroSection: {
      populate: {
        video: {
          fields: ["name", "url"],
        },
        link: true,
      },
    },
  },
});

const globalQuery = qs.stringify({
  populate: {
    navbar: {
      populate: {
        logoImage: {
          fields: ["name", "url"],
        },
        links: true,
      },
    },
    footer: {
      populate: {
        footerNav: {
          populate: {
            logoImage: {
              fields: ["name", "url"],
            },
            links: true,
          },
        },
        links: {
          populate: {
            image: {
              fields: ["name", "url"],
            },
            cta: true,
          },
        },
      },
    },
  },
});

const paginateBlogsQuery = (page: number, pageSize: number) => {
  return qs.stringify(
    {
      populate: {
        image: {
          fields: ["name", "url"],
        },
      },
      pagination: {
        page,
        pageSize,
      },
      sort: ["createdAt:desc"],
    },
    {
      encodeValuesOnly: true, //pretty url
    }
  );
};

const blogsQuery = qs.stringify(
  {
    populate: {
      image: {
        fields: ["name", "url"],
      },
    },
    sort: ["createdAt:desc"],
  },
  {
    encodeValuesOnly: true,
  }
);

const blogQuery = qs.stringify(
  {
    populate: {
      image: {
        fields: ["name", "url"],
      },
      authorImage: {
        fields: ["name", "url"],
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);

const aboutPageQuery = qs.stringify({
  populate: {
    mtd: {
      populate: {
        image: { fields: ["name", "url"] },
      },
    },
    td: true,
  },
});

export {
  globalQuery,
  homePageQuery,
  blogsQuery,
  blogQuery,
  aboutPageQuery,
  paginateBlogsQuery,
};
