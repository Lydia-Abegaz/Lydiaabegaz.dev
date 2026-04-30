import { blogPosts } from "@/data/blog-posts";
import BlogListClient from "./blog-list-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Lidia Aliso",
  description: "Technical articles about blockchain, full-stack development, and software engineering by Lidia Aliso.",
};

export default function BlogPage() {
  return <BlogListClient posts={blogPosts} />;
}
