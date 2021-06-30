import React, {useEffect, useCallback, useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    FlatList
} from 'react-native';
import tailwind from 'tailwind-rn';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {
    DefaultButton,
    DefaultInput
} from '~/Components/Theme';

import useServices from '~/Services';

const Posts = (props) => {
    const store = useSelector(store => store);
    const dispath = useDispatch();
    const navigation = useNavigation();
    const services = useServices();

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    const getPost = useCallback(async () => {
        setPosts(await services.usePostsServices.getPosts());
        // setComments(await services.useCommentsServices.getComments())
    }, []);

    console.log(posts)

    useEffect(() => {
        getPost();
    }, []);

    const renderPosts = ({item}) => (
        <View style={tailwind('p-2 border-2 border-gray-500 flex flex-col items-start justify-center')}>
            <Text style={tailwind(' text-2xl')}>
                Id: {item.id}
            </Text>

            {
                item.title &&
                <Text style={tailwind(' text-2xl')}>
                    Title: {item.title}
                </Text>
            }
            {
                item.name &&
                <Text style={tailwind(' text-2xl')}>
                    Name: {item.name}
                </Text>
            }
        </View>
    );

    return (
        <>
            {
                posts.length > 0 && (
                    <FlatList
                        data={posts}
                        renderItem={renderPosts}
                        keyExtractor={item => item.id}
                    />
                )

            }
        </>
        // <ScrollView>
        //     <DefaultButton
        //         themeText={'Voltar'}
        //         onPress={() => {
        //             navigation.goBack();
        //         }}
        //     />
        //     {
        //         posts.map(data => (
        //             <View key={data.id}
        //                   style={tailwind('p-2 border-2 border-gray-500 flex flex-col items-start justify-center')}>
        //                 <Text style={tailwind(' text-2xl')}>
        //                     Id: {data.id}
        //                 </Text>
        //
        //                 {
        //                     data.title &&
        //                     <Text style={tailwind(' text-2xl')}>
        //                         Title: {data.title}
        //                     </Text>
        //                 }
        //                 {
        //                     data.name &&
        //                     <Text style={tailwind(' text-2xl')}>
        //                         Name: {data.name}
        //                     </Text>
        //                 }
        //
        //
        //             </View>
        //         ))
        //     }
        // </ScrollView>
    )
}

export default Posts;
