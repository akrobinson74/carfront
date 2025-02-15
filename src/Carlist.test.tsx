import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import CarGrid from "./components/CarGrid";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("CarGrid tests", () => {
  test("component renders", () => {
    render(<CarGrid />, { wrapper });
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test("Cars are fetched", async () => {
    render(<CarGrid />, { wrapper });
    await waitFor(() => screen.getByText(/New Car/i));
    expect(screen.getByText(/Ford/i)).toBeInTheDocument();
  });

  test("Open new car modal", async () => {
    render(<CarGrid />, { wrapper });
    await waitFor(() => screen.getByText(/New Car/i));
    await userEvent.click(screen.getByText(/New Car/i));
    expect(screen.getByText(/Save/i)).toBeInTheDocument();
  });
});
