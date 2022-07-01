import React from 'react'
import ReactPlayer from 'react-player'


// renders the gallery page
export default function ImageList() {
  return (
    <div className="container">
        <h1 className="text-center p-3">Bulukutu Tea's Wonderful Gallery</h1>
        <div className="row align-items-start p-2">
            <div className="col">
            <img alt='new-tea-2'src={require('../images/new-tea-2.png')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='benefits of tea'src={require('../images/benefits-tea.png')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='tea-1'src={require('../images/new-tea-1.png')} width='100%'></img>
            </div>
        </div>
        <div className="row align-items-start p-2">
            <div className="col">
            <img alt='nea tea 5'src={require('../images/new-tea-5.png')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='new tea 3'src={require('../images/new-tea-3.png')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='new tea 4'src={require('../images/new-tea-4.png')} width='100%'></img>
            </div>
        </div>
        <div className="row align-items-start p-2">
            <div className="col">
            <img alt='back1'src={require('../images/back1.jpeg')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='tea 2'src={require('../images/tea-2.png')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='tea 0'src={require('../images/tea.png')} width='100%'></img>
            </div>
        </div>
        <div className="row align-items-start p-2">
            <div className="col">
            <img alt='tea bag'src={require('../images/teabag.png')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='leaves'src={require('../images/tea-box3.jpeg')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='leaves'src={require('../images/leave.png')} width='100%'></img>
            </div>
        </div>
        <div className="row align-items-start p-2">
            <div className="col">
            <img alt='tea bag'src={require('../images/tea-box2.jpeg')} width='100%'></img>
            </div>
            <div className="col">
            <img alt='leaves'src={require('../images/tea-box.jpeg')} width='100%'></img>
            </div>
            <div className="col">
            <ReactPlayer
            className='react-player'
            url= '/videos/video.mp4'
            controls = {true}
            width='100%'
            />
            </div>
        </div>
    </div>
  )
}
