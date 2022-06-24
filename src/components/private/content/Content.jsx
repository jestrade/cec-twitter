import { useState, useEffect } from "react";

const Content = (props) => {
    const { user } = props;

    const [tweets, setTweets] = useState([]);

    const getTweets = () => {
        const url = "https://api-twitter-cec-2022.herokuapp.com/api/tweets";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": user?.token
            }
        })
            .then(response =>
                response.json()
            )
            .then(json => {
                const tweets = json?.data;
                setTweets(tweets);
            })
            .catch(error => {
                console.log("error while creating the tweet");
            });
    };

    useEffect(getTweets, []);

    const newTweet = (content) => {
        const tweet = {
            content
        };
        const url = "https://api-twitter-cec-2022.herokuapp.com/api/tweets";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(tweet),
            headers: {
                "Content-Type": "application/json",
                "x-access-token": user?.token
            }
        })
            .then(response =>
                response.json()
            )
            .then(json => {
                getTweets();
            })
            .catch(error => {
                console.log("error while creating the tweet");
            });
    }

    return <section>
        <h2>Content</h2>
        <NewTweet newTweet={newTweet} />
        <Feed tweets={tweets} />
    </section>
};

const NewTweet = (props) => {
    const [content, setContent] = useState("");
    const { newTweet } = props;

    return <>
        <form>
            <p><textarea value={content} onChange={(event) => setContent(event.target.value)} /></p>
            <p><button type="button" onClick={() => newTweet(content)}>send</button></p>
        </form>
    </>
};

const Feed = (props) => {
    const { tweets } = props;

    return <section>
        {
            tweets?.length > 0 ?
                <ul>
                    {tweets.map(tweet => <li key={tweet._id}>
                        <p><strong>{`${tweet.user.name} @${tweet.user.username}`}</strong></p>
                        <p>{tweet.content}</p>
                        <p>comments: {tweet.comments.length}</p>
                        <p>{tweet.createdAt}</p>
                    </li>)}
                </ul>
                :
                <p>no tweets</p>
        }
    </section>
};

export default Content;