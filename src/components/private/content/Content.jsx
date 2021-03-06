import { useState, useEffect } from "react";

import "./../../main/style.css";
import "./style.css";

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
        if (!!content) {
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
        } else {
            console.log("No está permitido postear tweets vacíos")
        }
    }

    const deleteTweet = (id) => {
        const url = "https://api-twitter-cec-2022.herokuapp.com/api/tweets";
        const tweet = {
            "tweetId": id
        }
        fetch(url, {
            method: "DELETE",
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
                console.log("error while deleting the tweet");
            });
    }

    return <section>
        <h2>Content</h2>
        <NewTweet newTweet={newTweet} />
        <Feed tweets={tweets} deleteTweet={deleteTweet} user={user} />
    </section>
};

const NewTweet = (props) => {
    const [content, setContent] = useState("");
    const { newTweet } = props;

    return <>
        <form>
            <p className="paragraphSmall"><textarea className="input" value={content} onChange={(event) => setContent(event.target.value)} /></p>
            <p className="paragraphSmall"><button className="button buttonPrimary buttonSmall" type="button" onClick={() => newTweet(content)}>send</button></p>
        </form>
    </>
};

const Feed = (props) => {
    const { tweets, deleteTweet, user } = props;

    return <section>
        {
            tweets?.length > 0 ?
                <ul className="feedContent">
                    {tweets.map(tweet => <li className="feedItem" key={tweet._id}>
                        <p className="paragraphSmall"><strong>{`${tweet.user.name} @${tweet.user.username} ${tweet.createdAt}`}</strong></p>
                        <p className="paragraphSmall">{tweet.content}</p>
                        <p className="paragraphSmall">comments: {tweet.comments.length}</p>
                        {tweet.user.username === user.username &&
                            <p><button type="button" onClick={() => deleteTweet(tweet._id)}>delete</button></p>}
                    </li>)}
                </ul>
                :
                <p>no tweets</p>
        }
    </section>
};

export default Content;