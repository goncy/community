import fs from "fs";
import path from "path";

import matter from "gray-matter";

import {Entry, User} from "./types";

const root = process.cwd();

const api = {
  user: {
    list: async (): Promise<User[]> => {
      const files = fs.readdirSync(path.join(root, "data", "entries"));

      return files.reduce<User[]>((allFiles, fileName) => {
        const [name, extension] = fileName.split(".");

        if (extension !== "md") {
          return allFiles;
        }

        const source = fs.readFileSync(path.join(root, "data", "entries", fileName), "utf8");
        const {data} = matter(source);

        return [{...data, id: name} as User, ...allFiles];
      }, []);
    },
  },
  entry: {
    fetch: async (id: Entry["user"]["id"]): Promise<Entry | undefined> => {
      try {
        const source = fs.readFileSync(path.join(root, "data", "entries", `${id}.md`), "utf8");
        const {data, content} = matter(source);

        return {
          user: data as User,
          content: content as Entry["content"],
        };
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export default api;
