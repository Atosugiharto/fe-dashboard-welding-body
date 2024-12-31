import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "@src/share-components/Layout";
import { SbcWt } from "./pages/ohc/sbc-wt/SbcWt";
import { OhcDetail } from "./pages/ohc/sbc-wt/ohc-detail/OhcDetail";
import { OhcDetail2 } from "./pages/ohc/sbc-wt/ohc-detail/detail-layout-1/OhcDetail2";
import { SpLayout } from "./pages/ohc/sbc-wt/ohc-detail/detail-layout-1/SpLayout";
import { OhcDetail3 } from "./pages/ohc/sbc-wt/ohc-detail/detail-layout-1/OhcDetail3";
import { SpFault } from "./pages/ohc/sbc-wt/ohc-detail/detail-layout-1/sp-detail/SpFault";
import Login from "./pages/auth/Login";
import NotFoundPage from "./pages/404/NotFoundPage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { UbfMbt } from "./pages/ohc/ubf-mbt/UbfMbt";
import { MbtMbr } from "./pages/ohc/mbt-mbr/MbtMbr";
import { MbrSbc } from "./pages/ohc/mbr-sbc/MbrSbc";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Navigate to="/ohc-sbc-wt" />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="ohc-ubf-mbt" element={<UbfMbt />} />
            <Route path="ohc-mbt-mbr" element={<MbtMbr />} />
            <Route path="ohc-mbr-sbc" element={<MbrSbc />} />
            <Route path="ohc-sbc-wt" element={<SbcWt />} />
            <Route path="ohc-sbc-wt-detail1" element={<OhcDetail />} />
            <Route path="ohc-sbc-wt-detail2" element={<OhcDetail2 />} />
            <Route path="ohc-sbc-wt-detail3" element={<OhcDetail3 />} />
            <Route path="ohc-sbc-wt-sp" element={<SpLayout />} />
            <Route path="ohc-sbc-wt-sp-fault" element={<SpFault />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
