import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About us",
  description: "This is the about us page",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
