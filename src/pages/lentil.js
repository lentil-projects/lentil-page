import { Link } from "react-router-dom"
import untitled1 from '../assets/landing/untitled1.png';
import untitled2 from '../assets/landing/untitled2.png';
import untitled3 from '../assets/landing/untitled3.png';

export const Lentil = () => {
    return (
        <div className="landing">
            <div className="parallax">
                <div className=" parallax__layer parallax__layer--back">
                    <div className="diptych dtwo">
                        <img src={untitled2} alt="" />
                    </div>
                    <div className="float">
                        <img src={untitled3} alt="" />
                        <img src={untitled3} alt="" />
                        <img src={untitled3} alt="" />
                    </div>
                    <div className="diptych">
                        <img src={untitled2} alt="" />
                    </div>
                    <div className="float">
                        <img src={untitled3} alt="" />
                        <img src={untitled3} alt="" />
                        <img src={untitled3} alt="" />
                    </div>
                    <div className="diptych dthree">
                        <img src={untitled1} alt="" />
                    </div>
                </div>
                <div class="parallax__layer parallax__layer--base">
                    <div className="diptych">
                        <a href='https://www.twitch.tv/lentil_aoe' target='_blank' rel="noreferrer">
                            <p>{'Lentil_AoE '}<i className="fab fa-twitch"></i></p>
                        </a>
                        <p className='right mobile-hide'>Lentil Cup</p>
                    </div>
                    <hr />
                    <div className="diptych">
                        <a href='https://twitter.com/LentilDestroyer' target='_blank' rel="noreferrer">
                            <p>@lentildestroyer</p>
                        </a>
                        <Link to='/tournaments/lentil-cup'>
                            <p className='right mobile-hide'>1</p>
                        </Link>
                    </div>
                    <hr />
                    <div className="diptych">
                        <a href='https://twitter.com/lentilgarf' target='_blank' rel="noreferrer">
                            <p>@lentilgarf</p>
                        </a>
                        <Link to='/tournaments'>
                        <p className='right'><span className='mobile'>{'Lentil Cup'}</span><span className='right'>{' 1.5'}</span></p>
                        </Link>
                    </div>
                    <hr />
                    <div className="float">
                        <img src={untitled3} alt="" />
                        <img src={untitled3} alt="" />
                        <img src={untitled3} alt="" />
                    </div>
                    <div className="diptych done">
                        <img src={untitled1} alt="" />
                    </div>
                    <div className="diptych dthree">
                        <img src={untitled2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}