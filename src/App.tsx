import "./App.css";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useGetEleganteBlocks } from "./elegante";
import theme from "./theme";
import { Provider } from "./components";
import { useFilterAndArrangeBlocks } from "./helper";
import { useGetElegantePages } from "./hooks";

function App() {
  const getEleganteBlocks = useGetEleganteBlocks();
  const getElegantePages = useGetElegantePages();
  const filterAndArrangeBlocks = useFilterAndArrangeBlocks();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {getEleganteBlocks().map(({ name, component: Component, props }) => (
              <Route
                key={name}
                path={`blocks/${name.match(/\d+/)}`}
                element={
                  <Provider>
                    <Component {...props} />
                  </Provider>
                }
              />
            ))}
            {getElegantePages().map(({ name, pages }) => {
              return (
                <Route
                  key={name}
                  path={`${name === "home" ? "" : `${name}`}`}
                  element={filterAndArrangeBlocks(pages).map(({ component: Component, props }, index) => (
                    <Provider key={index}>
                      <Component {...props} />
                    </Provider>
                  ))}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
