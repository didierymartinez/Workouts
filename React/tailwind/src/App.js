import ArticlePreview from "./Pages/ArticlePreview/ArticlePreview";
import { NtfPreviewCard } from "./Pages/NtfPreviewCard/NtfPreviewCard";
import { OrderSummary } from "./Pages/OrderSummary/OrderSummary";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { StatsPreview } from "./Pages/statsPreview/StatsPreview";
import { ColumnsPreview } from "./Pages/Columns/ColumnsPreview";
import { ProfileCard } from "./Pages/ProfileCard/ProfileCard";
import { FaqAccordion } from "./Pages/FaqAccordion/FaqAccordion";
import { SocialProof } from "./Pages/SocialProof/SocialProof";
import { Countries } from "./Pages/Countries/Countries";
import { FourCards } from "./Pages/FourCards/FourCards";


export default function App() {
  return (
    <Router>
      <div className="absolute top-2 left-2">
              <Link className="block px-3 py-2 bg-sky-500 text-white rounded-md" to="/">Home</Link>
      </div>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/articlePrev" element={<ArticlePreview />}/>
          <Route exact path="/ntf" element={<NtfPreviewCard />}/>
          <Route exact path="/ordersumary" element={<OrderSummary />}/>
          <Route exact path="/statspreview" element={<StatsPreview />}/>
          <Route exact path="/columnspreview" element={<ColumnsPreview />}/>
          <Route exact path="/profilecard" element={<ProfileCard />}/>
          <Route exact path="/faqaccordion" element={<FaqAccordion />}/>
          <Route exact path="/socialproof" element={<SocialProof />}/>
          <Route exact path="/countries" element={<Countries />}/>
          <Route exact path="/fourcards" element={<FourCards />}/>
      </Routes>
    </Router>
  );
}