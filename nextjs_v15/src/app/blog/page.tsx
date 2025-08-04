import { Metadata } from "next";

export const meatadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
  return <h1>My blog</h1>;
}
