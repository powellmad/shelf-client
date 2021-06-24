import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ShopCard = ({shop}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="shop-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={shop.logo_path}
          title={shop.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
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