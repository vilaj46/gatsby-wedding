import * as React from "react";
import { graphql } from "gatsby";

import Header from "../newComponents/Header";
import Footer from "../newComponents/Footer";

const InfoPage = (props) => {
  const { location } = props;
  return (
    <main>
      <Header location={location} />
      <Footer />
      <p className="text-center text-3xl quickPen mx-auto">Events</p>
      <div className="shadow2 mt-6 w-1/4 mx-auto"></div>
      <p className="text-center pt-12 text-2xl eaves mx-auto uppercase font-bold">
        Wedding Ceremony
      </p>
      <p className="text-center pt-6 text-2xl eaves mx-auto">
        11:30 AM, <br className="md:hidden" /> November 26, 2022
      </p>
      <p className="text-center text-xl eaves mx-auto">St. Anne's Church</p>
      <div className="text-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Saint+Anne's+Church/@40.7122636,-73.682072,16z/data=!4m9!1m2!2m1!1sst+anne's+church!3m5!1s0x89c262e7731f8f5f:0xcdc9dc2fc7d9c321!8m2!3d40.718508!4d-73.6785691!15sChBzdCBhbm5lJ3MgY2h1cmNokgEGcGFyaXNo"
          className="shadow3 hover:border-green-900 text-center p-1 mt-3 text-base eaves mx-auto hover:text-green-900 tracking-widest"
        >
          Get Directions
        </a>
      </div>
      {/** ---------------------------------------------------------- */}
      <p className="text-center pt-12 text-2xl eaves mx-auto uppercase font-bold">
        Reception
      </p>
      <p className="text-center pt-6 text-2xl eaves mx-auto">
        5:00 PM, <br className="md:hidden" /> November 26, 2022
      </p>
      <p className="text-center text-xl eaves mx-auto">
        The Vineyards at Aquebogue
      </p>
      <div className="text-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/The+Vineyards+at+Aquebogue/@40.9476858,-72.6094415,17z/data=!3m1!4b1!4m5!3m4!1s0x89e88b78aec82327:0xfbe7458e21f5c729!8m2!3d40.9475258!4d-72.6072556"
          className="shadow3 hover:border-green-900 text-center p-1 mt-3 text-base eaves mx-auto hover:text-green-900 tracking-widest"
        >
          Get Directions
        </a>
      </div>
      <Footer />
    </main>
  );
};

export const query = graphql`
  query InfoQuery {
    site(siteMetadata: { siteUrl: {} }) {
      id
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default InfoPage;
