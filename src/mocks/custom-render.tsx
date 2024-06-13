import { render } from "@testing-library/react";
import { UserGHProvider } from "../context/app-provider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const customRender = (ui: React.ReactElement) => {
  const queryClient = new QueryClient()
  return render(
    <QueryClientProvider client={queryClient}>
      <UserGHProvider>
        {ui}
      </UserGHProvider>
    </QueryClientProvider>
  );
}