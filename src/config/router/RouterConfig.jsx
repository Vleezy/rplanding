// REACT ROUTER CONFIGURATION PAGE
// -------------------------------

import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

// Lazy Loading
const Landing = React.lazy(() => import('../../pages/Landing/Landing'));
// const Page1 = React.lazy(() => import('../Page1'));
// const Page2 = React.lazy(() => import('../Page2'));

function RouterConfig() {
    return (
        <div>

            <Routes>
                {/* Default Initial Page */}
                <Route path="*" element={<Navigate replace to="/landing" />} />

                {/* Pages Routed */}
                <Route path="/landing" element={<Landing />} />
                {/* <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} /> */}


            </Routes>

        </div>
    )
}

export default RouterConfig
