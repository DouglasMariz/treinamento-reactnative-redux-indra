import service from '../config';

const CommentsServices = (props) => {
    const getComments = async () => {
        const response = await service.get('comments');
        return response.data;
    }

    return {getComments};
};

export default CommentsServices;
