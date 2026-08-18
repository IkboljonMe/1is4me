import type { Metadata } from "next";
import AuditForm from "@/components/AuditForm";

export const metadata: Metadata = {
  title: "Audit form",
  description:
    "20 questions that let the 1is4me team understand your business before the audit call.",
  robots: { index: false, follow: true },
};

export default function AuditFormPage() {
  return (
    <main>
      <AuditForm />
    </main>
  );
}
