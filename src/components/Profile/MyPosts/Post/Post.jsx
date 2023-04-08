import React from 'react'
import s from "./Post.module.css";

const Post = (props) => {
    console.log(props.avatar)
    return (
        <div className={s.post_wrapper}>
            <div className={s.item}>
                <div className={s.heading}>
                    <img src={props.avatar} alt="avatar" className={s.ava}/>
                    <div className={s.author}>
                        {props.author}
                    </div>
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}
export default Post
