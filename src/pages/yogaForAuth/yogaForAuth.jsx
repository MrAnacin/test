import User from "../../components/user/user";
import Exercises from "../../components/exercises/exercises";
import Progress from "../../components/progress/progress";
import Myprogress from "../../components/myprogress/myprogress";
import YouTubeLink from '../../components/youtubelink/youtubelink';

import logo from '../../image/logo.png';

import style from './yogaForAuth.module.scss';


export default function YogaForAuth() {

    const videoId = 'v-xTLFDhoD0';
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <img src={logo} alt="logo" />
                <User />
            </header>
            <div className={style.content}>
                <h2 className={style.content__title}>Йога</h2>
                <p className={style.content__description}> Красота и здоровье / Йога на каждый день / 2 день</p>
                <div className={style.content__video}>
                <YouTubeLink videoId={videoId} />
                </div>
            </div>
            <div className={style.footer}>
                <Exercises />
                <Progress/>
            </div>
            <Myprogress />
        </div>
    )
}