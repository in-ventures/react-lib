import React, {useState} from 'react';
import ImageLoader from '../components/ImageLoader';
import { text } from '@storybook/addon-knobs';


export default {
    title: 'Image Loader',
};

export const base = () => {

    const imagealt = text('Alt', 'Medicamento');
    const [imagesrc, setImagesrc] = useState("");

    return(
        <div style={{width:"200px", height:"200px"}} >
            <ImageLoader
            imagesrc={imagesrc}
            imagealt={imagealt}
            setImagesrc={setImagesrc}
            ></ImageLoader>
        </div>
    );
}


