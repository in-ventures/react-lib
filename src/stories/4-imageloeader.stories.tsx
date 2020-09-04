import React, {useState, useCallback} from 'react';
import ImageLoader from '../components/ImageLoader';


export default {
    title: 'Image Loader',
};

export const base = () => {

    const [imagesrc, setImagesrc] = useState("");

    const loadImage = useCallback((event:any) => {
        let file = event.target.files[0]; 
        setImagesrc(URL.createObjectURL(file));
    }, [imagesrc]);

    const deleteImage = useCallback(() => {
        setImagesrc("");
    }, [imagesrc]);

    return(
        <div style={{width:"200px", height:"200px"}} >
            <ImageLoader
            imagesrc={imagesrc}
            onLoadClick={loadImage}
            onTrashClick={deleteImage}
            ></ImageLoader>
        </div>
    );
}


