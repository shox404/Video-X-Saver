import axios from "axios";

const base = {
  baseUrl:
    "https://social-media-video-downloader.p.rapidapi.com/api/getSocialVideo",
  type: ["https://"],
  headers: {
    "X-RapidAPI-Key": "b3a94ab247msh71c8623952b637fp18e988jsn1b6709488930",
    "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
  },
};

export const api = (link, set, key) => {
  const $ = (key, value) => set((p) => ({ ...p, [key]: value }));
  if (link.indexOf(base.type[0]) > -1 && link.indexOf(key) > -1) {
    $("loader", true);
    axios
      .request({
        method: "GET",
        url: base.baseUrl,
        params: { url: link },
        headers: base.headers,
      })
      .then((res) => {
        const links = res.data.links;
        $("video", links[links.length - 1].link);
      })
      .finally(() => $("loader", false));
  } else $("valid", true);
};
