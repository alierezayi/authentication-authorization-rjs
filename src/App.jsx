import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import defaultOptions from "./configs/reactQuery";
import RootLayout from "./layouts/RootLayout";
import { ModalContextProvider } from "./context/ModalContextProvider";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ModalContextProvider>
          <RootLayout>
            <Router />
          </RootLayout>
        </ModalContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
