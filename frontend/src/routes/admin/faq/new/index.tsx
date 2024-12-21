import { createFileRoute } from "@tanstack/react-router";
import FaqCreatePage from "../../../../pages/FaqCreatePage";

export const Route = createFileRoute("/admin/faq/new/")({
  component: FaqCreatePage,
});
