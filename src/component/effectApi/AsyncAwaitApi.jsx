import { useState, useEffect, useCallback } from "react";

const UseEffectAPI = () => {
    const [posts, setPosts] = useState([]);
    const [mediaUrls, setMediaUrls] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPostData = useCallback(async () => {
        try {
            const response = await fetch("https://blog.vitabletech.in/wp-json/wp/v2/posts");
            const postData = await response.json();
            setPosts(postData);
        } catch (error) {
            setError(error);
        }
    }, []);

    const getMediaUrl = useCallback(async (featuredMediaId) => {
        try {
            const mediaResponse = await fetch(`https://blog.vitabletech.in/wp-json/wp/v2/media/${featuredMediaId}`);
            const mediaData = await mediaResponse.json();
            if (mediaData.guid && mediaData.guid.rendered) {
                return mediaData.guid.rendered;
            } else {
                return '';
            }
        } catch (error) {
            return '';
        }
    }, []);

    const fetchMediaUrls = useCallback(async () => {
        try {
            const mediaPromises = posts.map((currentPost) => getMediaUrl(currentPost.featured_media));
            const mediaUrls = await Promise.all(mediaPromises);
            console.log(mediaUrls);
            setMediaUrls(mediaUrls);
        } catch (error) {
            setError(error);
        }
    }, [posts, getMediaUrl]);

    useEffect(() => {
        getPostData();
    }, [getPostData]);

    useEffect(() => {
        if (posts.length > 0) {
            fetchMediaUrls();
        }
    }, [fetchMediaUrls, posts]);

    useEffect(() => {
        if (posts.length > 0 && mediaUrls.length > 0) {
            setLoading(false);
        }
    }, [posts, mediaUrls]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                {posts.map((currentPost, index) => (
                    <div key={currentPost.id} className="col-lg-4 col-md-6 col-12 my-4">
                        <img src={mediaUrls[index]} alt={currentPost.title.rendered} width="50" />
                        <div className="text-dark">{currentPost.title.rendered}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UseEffectAPI;
