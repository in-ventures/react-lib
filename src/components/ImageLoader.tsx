
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ReactComponent as ImageLoaderIcon } from '../assets/imageloader.svg';


import { TextFieldProps } from '@material-ui/core';

const useStyles = makeStyles({   
    container: {
        width:"100%", 
        height:"100%",
        textAlign: "right",
    },
    borderedArea: {
        width:"100%", 
        height:"100%",
        border: "1px solid #414047",
        borderRadius: "4px",  
        position: "relative",
    },
    customfileupload: {
        cursor: "pointer",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    default: {
        width: "48px",
        height: "48px",
       // objectfit: "contain"
    }
});

//Type
type ImageLoaderProps = {
    imagesrc?:string;
    onLoadClick?: (event:any) => void;
    onTrashClick?: () => void;
} & TextFieldProps;


export default function ImageLoader({
    imagesrc,
    onLoadClick = () => {},
    onTrashClick = () => {} 
} : ImageLoaderProps ) {
    const classes = useStyles(); 

    return (
        <div className={classes.container}>

            {imagesrc
                ?     
                <div style={{display: "contents"}}>
                    <img className={classes.borderedArea} 
                    src={imagesrc} 
                    alt="Medicamento"
                    ></img>

                    <IconButton aria-label="delete" onClick={onTrashClick} size="small" >
                        <DeleteIcon fontSize="small"/>
                    </IconButton>
                </div>

                : 
                
                <div className={classes.borderedArea} >
                    <label htmlFor="file-upload" className={classes.customfileupload}> 
                        <ImageLoaderIcon className={classes.default}/>
                    </label>
                    <input type="file" id="file-upload" accept="image/*;capture=camera"  className={classes.borderedArea} 
                    style={{display: "none"}} onChange={onLoadClick} />
                </div>
                
            }

        </div>
    );
};