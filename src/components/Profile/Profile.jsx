import React from 'react'
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <main className={s.content}>
            <div>
                <img src="https://cdn140.picsart.com/304066907246201.jpg" alt="" className={s.img_bg}/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </main>
    )
}
export default Profile
