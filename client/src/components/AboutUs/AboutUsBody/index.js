import React from 'react'
import './index.css'
import Tablet from '../../../assets/AboutUs/aboutus_2.png'
import Hadi from '../../../assets/AboutUs/MeetTheTeam/Hadi.png'
import Fakhri from '../../../assets/AboutUs/MeetTheTeam/Fakhri.jpg'
import Fanta from '../../../assets/AboutUs/MeetTheTeam/padem.jpg'
import Pindika from '../../../assets/AboutUs/MeetTheTeam/pindikabener.jpg'
import { Modal, Backdrop, Fade } from '@material-ui/core';

function AboutUsBody({identification}) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {identification === '1' ?
                <div className="aboutus-body">
                    <div className="aboutus-body-text">
                        <div className="aboutus-body-title">
                            <h2>Browse the most
                            easy-to-do 3-course meal</h2>
                        </div>
                        <div className="aboutus-body-writing">
                            <p>From appetizer to dessert, enjoy our
                            selection of easy-to-do meal. With
                            few ingredients and easy-to-do
                            methods, it’s your time to become
                            your own, home-chef.<br />
                            </p>
                        </div>
                    </div>
                    <div className="aboutus-body-img">
                        <img src={ Tablet } alt="tablet" className="aboutus-img" />
                    </div>
                </div>
            :
                null
            }

            {identification === '2' ?
                <div className="aboutus-body aboutus-body-whatis">
                        <div className="aboutus-body-title">
                            <h2>What is EZCOOKFOR.ME?</h2>
                        </div>
                        <div className="aboutus-body-writing">
                            <p>EZCOOKFOR.ME is a website made for you, especially, who
                            tends to eat outside without realizing the absolute beauty of
                            cooking at home. <br /><br />
                            With the help of the community of home cooks, find what is
                            suitable for you and of course, do-it-yourself.
                            </p>
                            <button type="button" className="button-meet-d-team" onClick={handleOpen}>Meet The Team</button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className="aboutus-modal"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <div className="aboutus-modal-fade">
                                        <div className="aboutus-team-img">
                                            <a href={ Fakhri } target="_blank" rel="noopener noreferrer">
                                                <img src={ Fakhri } alt="Foto Omar" className="aboutus-modal-grid" />
                                            </a>
                                        </div>
                                        <div className="aboutus-team-img">
                                            <a href={ Pindika } target="_blank" rel="noopener noreferrer">
                                                <img src={ Pindika } alt="Foto Omar" className="aboutus-modal-grid" />
                                            </a>
                                        </div>
                                        <p className="aboutus-modal-grid">
                                            Ahmad Fakhri<br />
                                            Front End Developer
                                        </p>
                                        
                                        <p className="aboutus-modal-grid">
                                            Anathapindika M<br />
                                            Front End Developer
                                        </p>
                                        <div className="aboutus-team-img">
                                            <a href={ Fanta } target="_blank" rel="noopener noreferrer">
                                                <img src={ Fanta } alt="Foto Omar" className="aboutus-modal-grid" />
                                            </a>
                                        </div>
                                        <div className="aboutus-team-img">
                                            <a href={ Hadi } target="_blank" rel="noopener noreferrer">
                                                <img src={ Hadi } alt="Foto Omar" className="aboutus-modal-grid" />
                                            </a>
                                        </div>
                                        <p className="aboutus-modal-grid">
                                            Fatma Putri<br />
                                            Back End Developer
                                        </p>
                                        
                                        <p className="aboutus-modal-grid">
                                            Muhammad Hadi<br />
                                            Fullstack Developer
                                        </p>
                                    </div>    
                                </Fade>
                            </Modal>
                        </div>

                </div>
            :
                null
            }

            {identification === '3' ?
                <div className="aboutus-body aboutus-body-howtouse">
                    <div>
                        <div className="aboutus-body-title">
                            <h2>How to use EZCOOKFORME?</h2>
                        </div>
                        <div className="aboutus-body-writing">
                            <p>Take a look at your fridge. List anything you can think of
                                or something you can make out of them. Search on the search bar.
                                Click one of the results. Get Cooking.
                            </p>
                        </div>
                    </div>
                </div>
            :
                null
            }
        </>
    )
}

export default AboutUsBody;
