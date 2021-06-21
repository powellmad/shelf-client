import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from "../images/default-image.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ShopCard = (shop) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="shop-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={shop.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {shop.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Products
        </Button>
      </CardActions>
    </Card>
  );
}