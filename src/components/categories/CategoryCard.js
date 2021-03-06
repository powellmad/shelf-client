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

export const CategoryCard = ({category}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="category-card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={category.label}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" underline="none">
           {category.label}
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
