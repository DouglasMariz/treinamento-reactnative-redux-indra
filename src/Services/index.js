import PostsServices from './PostsServices';
import CommentsServices from './CommentsServices';

const useServices = () => {
    const usePostsServices = PostsServices();
    const useCommentsServices = CommentsServices();

    return {
        usePostsServices,
        useCommentsServices
    }
};

export default useServices;
