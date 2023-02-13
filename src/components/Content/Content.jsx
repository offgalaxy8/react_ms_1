import React from "react";
import s from './Content.module.css';
const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.top_img}>
                <img src="https://1rulon.ru/wp-content/uploads/54019-scaled.jpg" alt="img"/>
            </div>
            <div className={s.middle_content}>
                <div className={s.left_middle}>
                    <img src="https://img3.goodfon.ru/original/320x240/4/49/sobaka-vzglyad-drug-osen-4811.jpg" alt="img"/>
                </div>
                <div className={s.right_middle}>
                    <h1>Name Last_Name</h1>
                    <p>Text: <span>test first</span></p>
                    <p>Text 2: <span>test two</span></p>
                    <p>Text 3: <span>test three</span></p>
                    <p>Text 4: <span>test four</span></p>
                </div>
            </div>
            <div className={s.post_middle}>
                <h2>Title block</h2>
                <div className={s.form}>
                    <form action="">
                        <textarea name="textarea" id="textarea" rows="5" placeholder='text'></textarea>
                        <button type='submit'>Send</button>
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
        </div>
    );
}

export default Content;