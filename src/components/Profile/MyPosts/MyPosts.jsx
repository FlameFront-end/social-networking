import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post
                    avatar='https://cdn.discordapp.com/avatars/469792652951420928/d6e4aa31b345bb8a507e42562ed94d9c.png?size=256'
                    author='WolfHeart'
                    message='Мой первый пост!'
                />
            </div>
        </div>
    )
}
export default MyPosts
