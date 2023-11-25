import React from 'react'
import styles from './Card.module.css'
import { Tooltip, Chip } from '@mui/material'


const Card=({data,type})=>{
    
    const getCard=()=>{
        switch(type){
            case "album":{
                const {image,follows,songs,title,slug}=data;
                return(
                    <Tooltip title={`${songs} songs`} placement='top' arrow>hello
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
                return <></>
        }
    }
    return getCard(type)
}
    
export default Card