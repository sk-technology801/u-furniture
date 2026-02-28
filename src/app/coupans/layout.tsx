import type { ReactNode } from "react";
import CoupanHeader from "./components/CoupanHeader";

export default function CoupansLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <CoupanHeader />
      {children}
    </>
  );
}