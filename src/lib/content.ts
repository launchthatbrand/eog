import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PageContent {
  frontmatter: {
    title: string;
    description: string;
    lastUpdated: string;
  };
  body: string;
  html: string;
}

export const getPageContent = async (slug: string): Promise<PageContent> => {
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const processed = await remark().use(html).process(content);

  return {
    frontmatter: data as PageContent["frontmatter"],
    body: content,
    html: processed.toString(),
  };
};
