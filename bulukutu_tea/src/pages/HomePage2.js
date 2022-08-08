import React from 'react'

// Buttons for the home page
import Carousel from "../components/common/Carousel";
import Button from '../components/common/Button';
import BreakLine from '../components/common/BreakLine'

// import stylesheet for homepage
import "../styles/homePageStyles.css";


export default function HomePage() {

    // const navigate = useNavigate()
    // const [isHovering, setHovering] = useState(false);
    return (
        <div>
            <div className='landing-video d-flex justify-content-center'>
                <video src={require('../images/video.mp4')} alt='...'/>
            {/* <Button size={"btn-lg"} width = {'auto'} page='/shop'>
                Discover
            </Button> */}
            </div>
            {/* <BreakLine></BreakLine> */}
            <div>
                <div className='row'>
                    <div className='col-xs-12 col-sm-7 m-0 p-0'>
                        <Carousel></Carousel>
                    </div>                    
                    <div className='col-xs-12 col-sm-5 first-sm m-0 p-0'>
                        <div className='side-content'>
                            <h3>
                                <b><i> Central Congo's Finest</i></b>
                            </h3>
                            <p className="bulukutu-quote text-center mt-4">
                                <b>Bulukutu Tea</b> is an aromatic and perennial plant from the Savannah bush found
                                in the DRC. The tea leaf is <b>pungent</b> yet soft on the palate. It has a hint of <b>lemon, 
                                mint, and eucalyptus</b> aroma - an aroma that surrounds you like a comforting mist. The
                                tea is <b>caffeine free</b>.
                            </p>
                            <p className="bulukutu-quote text-center mt-4">
                              Grown solely on African soil and <b>ethically sourced</b>, our gourmet
                              teas pay tribute to African elegance and refinement. The careful 
                              blending of the finest buds, leaves and spices ensures that you 
                              are not just drinking our tea, but also <b>tasting a piece of our story</b>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  ) 
}   
