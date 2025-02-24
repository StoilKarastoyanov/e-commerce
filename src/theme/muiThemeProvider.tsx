"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";

const cache = createCache({ key: "mui", prepend: true });

const MuiProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <CacheProvider value={cache}>
            <CssBaseline />
            {children}
        </CacheProvider>
    );
};

export default MuiProvider;
