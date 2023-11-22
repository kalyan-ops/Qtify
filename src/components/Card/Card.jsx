import React from 'react'
import styles from './Card.module.css'
import { Tooltip, Chip } from '@mui/material'


const Card=({data,type})=>{
    const getCard=()=>{
        switch(type){
            case "album":{
                const {image,follows,title,slug}=data;
                return(
                    <Tooltip title='hi' placement='top' arrow>hello
                        <a href={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="album" loading='lazy' />
                                    <div className={styles.banner}>
                                        <Chip
                                        label={`${follows} Follows`}
                                        size='small'
                                        className=''
                                        />
                                    </div>
                                </div>
                                <div className={styles.titleWapper}>
                                    <p>{title}</p>
                                </div>

                            </div>
                        </a>
                    </Tooltip>
                )
            }
            case "song":{
                const {image,likes,title}=data;
                return(
                    <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt="album" loading='lazy' />
                                <div className={styles.banner}>
                                    <div className={styles.pills}>
                                        <p>{likes} Likes</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.titleWapper}>
                                <p>{title}</p>
                            </div>

                        </div>
                )
            }
            default:
                return (
                    <div>
                    </div>
                  );
        }
    }
    return getCard(type)
}
    
export default Card