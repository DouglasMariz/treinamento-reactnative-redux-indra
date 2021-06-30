import service from '../config';

const PostsServices = (props) => {
    const getPosts = async () => {
        const response = await service.get('/posts');
        return response.data;
    }

    const getPostById = async (idPost) => {
        const response = await service.get(`/posts/${idPost}`);
        return [response.data];
    }

    return {
        getPosts,
        getPostById
    };
};

export default PostsServices;
