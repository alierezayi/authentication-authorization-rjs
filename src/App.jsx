import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import defaultOptions from "./configs/reactQuery";
import RootLayout from "./layouts/RootLayout";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootLayout>
          <Router />
          <Toaster />
        </RootLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
