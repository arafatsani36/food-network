'use client'
const { createContext, useState } = require("react");

export const MainBarContext = createContext(null);

const ResponsiveMainBar = ({children}) => {
    const [open, setOpen] = useState(false);

    const ResponsiveMainBarInfo = {
        open,
        setOpen
    }
    return (
        <MainBarContext.Provider value={ResponsiveMainBarInfo}>
             {children}
        </MainBarContext.Provider>
    );
};

export default ResponsiveMainBar;