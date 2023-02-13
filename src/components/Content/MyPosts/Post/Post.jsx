import React from "react";
import s from './MyPosts.module.css';
const MyPosts = () => {
    return (
        // <div className={s.content}>
            <div className={s.post_middle}>
                <h2>Title block</h2>
                <div className={s.form}>
                    <form action="src/components">
                        <textarea name="textarea" id="textarea" rows="5" placeholder='text'></textarea>
                        <button type='submit'>Add</button>
                        <button type='button'>Remove</button>
                    </form>
                </div>
                <div className={s.posts}>
                    <div className={s.post_inner}>
                        Post 1
                    </div>
                    <div className={s.post_inner}>
                        Post 2
                    </div>
                    <div className={s.post_inner}>
                        Post 3
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default MyPosts;