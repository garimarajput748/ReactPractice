import { useState, useEffect } from "react";

const UseEffectAPI = () => {

    const [posts, setPosts] = useState([]);

    const getPostData = async () => {
        const response = await fetch(`https://blog.vitabletech.in/wp-json/wp/v2/posts`);
        // console.log(await response.json())
        setPosts(await response.json());
    }

    const getPostMedia = async () => {

        const mediaPromises = posts.map(async (currentPost) => {

            const featuredMediaId = currentPost.featured_media;
            const mediaResponse  = await fetch (`https://blog.vitabletech.in/wp-json/wp/v2/media/${featuredMediaId}`);
            const mediaData = await mediaResponse.json();
            if (mediaData.guid && mediaData.guid.rendered) {
                return mediaData.guid.rendered;
            } else {
                 return '';
                }
        })
        const mediaUrls = await Promise.all(mediaPromises);
            console.log(mediaUrls);
    }

    useEffect( () => {
        getPostData();
        getPostMedia();
    },[]);
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    posts.map((currentPost) =>{
                        return(
                            <div key={currentPost.id}  className="col-lg-4 col-md-6 col-12 my-4">
                                <img src = { currentPost.featured_media }/>
                                <div className="text-dark">
                                    {currentPost.title.rendered}
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    );
}

export default UseEffectAPI;