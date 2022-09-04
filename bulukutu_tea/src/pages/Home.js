import React from 'react'
import HeroSection from '../components/common/HeroSection'
import '../styles/homePageStyles.css'

export default function Home() {
  return (
    <>
        <HeroSection />
        <div className="side_content">
          <h3>
            <b>
              <i> Central Congo's Finest</i>
            </b>
          </h3>
          <p className="bulukutu-quote text-center mt-4">
            <b>Bulukutu Tea</b> is an aromatic and perennial plant from the
            Savannah bush found in the DRC. The tea leaf is <b>pungent</b> yet
            soft on the palate. It has a hint of{" "}
            <b>lemon, mint, and eucalyptus</b> aroma - an aroma that surrounds
            you like a comforting mist. The tea is <b>caffeine free</b>.
          </p>
          <p className="bulukutu-quote text-center mt-4">
            Grown solely on African soil and <b>ethically sourced</b>, our
            gourmet teas pay tribute to African elegance and refinement. The
            careful blending of the finest buds, leaves and spices ensures that
            you are not just drinking our tea, but also{" "}
            <b>tasting a piece of our story</b>.
          </p>
        </div>
      
    </>
  )
}
