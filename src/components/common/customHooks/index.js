import { useState, useEffect } from 'react';

export function usePost() {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people/');
            if (!response.ok) {
                throw new Error('error');
            }
            const list = await response.json();
            console.log(list.results);
            const newList = list.results.map(item => {
                return item;
            });
            setPosts(newList);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return [posts, setPosts];
}
