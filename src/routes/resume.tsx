import { createFileRoute } from "@tanstack/react-router";
import ResumePage from "@/components/site/ResumePage";

export const Route = createFileRoute("/resume")({
	component: ResumePage,
});
