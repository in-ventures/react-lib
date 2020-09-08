import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldProps } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ReactComponent as ImageLoaderIcon } from '../assets/imageloader.svg';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useState } from '@storybook/addons';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
    textAlign: 'right',
  },
  borderedArea: {
    width: '100%',
    height: '100%',
    border: '1px solid #414047',
    borderRadius: '4px',
    position: 'relative',
  },
  customfileupload: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  default: {
    width: '48px',
    height: '48px',
  },
});

//Type
type ImageLoaderProps = {
  objectFit?: string;
  file?: string;
  alt?: string;
  setFile?: (url: string) => void;
} & TextFieldProps;

export default function ImageLoader({
  objectFit,
  file,
  alt,
  setFile = () => {},
}: ImageLoaderProps) {

  const classes = useStyles();
  const iframeRef: React.RefObject<HTMLIFrameElement> = React.createRef();
  const [fileName, setFileName] = React.useState();

  const loadFile = useCallback(
    (event: React.BaseSyntheticEvent) => {
      const file = event.target.files[0];
      setFile(URL.createObjectURL(file));
      setFileName(file.name);
    },
    [setFile, setFileName],
  );

  const deleteFile = useCallback(() => {
    setFile('');
  }, [setFile]);

  
  function onIframeLoad(){
    let iframe = iframeRef.current; 
    if( iframe && iframe.contentDocument ){
      let imgs = iframe.contentDocument.getElementsByTagName("img");
      if(imgs.length){
        imgs[0].style.width = "100%";
        imgs[0].style.height = "100%";
        imgs[0].style.objectFit = objectFit?objectFit:"";
        imgs[0].alt = alt?alt:"Default";
      }
    }
  }

  return (
    <div className={classes.container}>
      {file ? (
        <div style={{ display: 'contents' }}>

          <iframe ref={iframeRef} src={file} className={classes.borderedArea} onLoad={onIframeLoad} ></iframe>

          <Typography component="div" variant="caption">
              <Box color="primary" >
                {fileName}
                <IconButton aria-label="delete" onClick={deleteFile} size="small">
                  <DeleteIcon fontSize="small" color="inherit"/>
                </IconButton>
              </Box>        
          </Typography>
          
          
        </div>
      ) : (
        <div className={classes.borderedArea}>
          <label htmlFor="file-upload" className={classes.customfileupload}>
            <ImageLoaderIcon className={classes.default} />
          </label>
          
          <input
            type="file"
            id="file-upload"
            accept="image/*;capture=camera"
            className={classes.borderedArea}
            style={{ display: 'none' }}
            onChange={loadFile}
          />  
        </div>
      )}
    </div>
  );
}
