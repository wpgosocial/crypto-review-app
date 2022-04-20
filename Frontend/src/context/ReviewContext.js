import React, { createContext, useState, useEffect } from 'react';

export const ReviewContext = createContext(null);

const ReviewProvider = ({ children }) => {
    const [reviewContent, setReviewContent] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const reviewData = () => {
        fetch(`/api/reviews`)
            .then((res) => res.json())
            .then((json) => {
                
                setReviewContent(json);
            })
            .then(() => { setIsLoading(false); });
    };
    useEffect(() => {
        reviewData()
    }, []);
console.log("reviewContent +++++++++++++++++ ", reviewContent)

    return (
        <>
            <ReviewContext.Provider
                value={{
                    reviewContent, 
                    setReviewContent,
                    isLoading, 
                    setIsLoading,
                }}
            >
                {children}
            </ReviewContext.Provider>
        </>
    )
}

export default ReviewProvider;