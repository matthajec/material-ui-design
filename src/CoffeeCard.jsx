import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core';
import Dotdotdot from 'react-dotdotdot';

const useStyles = makeStyles({
  root: {
    height: '430px'
  },

  content: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },


  description: {
    height: '2em',
    lineClamp: '2'
  },

  media: {
    height: '250px'
  }
});

const CoffeeCard = (props) => {
  const { avatarSrc, title, subtitle, description, imageSrc } = props;
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader
        classes={{
          content: classes.content,
          title: classes.title
        }}
        avatar={
          <Avatar aria-label="avatar" src={avatarSrc} />
        }
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia className={classes.media} image={imageSrc} />
      <CardContent>
        <Typography className={classes.description} variant="body2" component="div">
          <Dotdotdot clamp={2}>
            {description}
          </Dotdotdot>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small">BUY NOW</Button>
        <Button variant="contained" color="secondary" size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;