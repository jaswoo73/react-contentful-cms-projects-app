import { createClient } from "contentful";
import { useEffect } from "react";
import { useState } from "react";

const client = createClient({
  space: "ibu8ed2o3l2k",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { projects, loading };
};

client
  .getEntries({
    content_type: "projects",
  })
  .then((response) => console.log(response));
