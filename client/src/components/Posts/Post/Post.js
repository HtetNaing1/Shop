import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Post = ({ post }) => {
    const classes = useStyles();
    return(
        <Card className={classes.card} raised elevation={6}> 
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <CardContent>
                <Typography className={classes.body} gutterBottom variant="h6">{post.message}</Typography>
                <Typography variant="body2" color="textPrimary">{post.tags.map((tag) => `$${tag} `)}</Typography>
            </CardContent>
        </Card>
    )
}

export default Post;