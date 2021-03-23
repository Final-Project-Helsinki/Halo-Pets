import {
  Typography,
  Grid,
  Avatar,
  Link,
  Button
} from '@material-ui/core'
import { CardActionArea, Card, CardContent, Hidden, CardMedia } from '@material-ui/core';


export default function CardArtikel(data) {
  const {content, date, image, link, title} = data.articles


  const artikelNews = (payload) =>{
    console.log(payload)
    // console.log(articles, 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx');
    const win = window.open(payload, "_blank");
    // win.focus()
  }



  return (


    <Grid item xs={12} md={6} style={{ marginTop: 25 }}>
      <CardActionArea>
        <Card style={{ display: 'flex', height: 300 }}>

          <div style={{ flex: 1 }}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {title}
                  </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {date}
                  </Typography>
              <Typography variant="subtitle1" paragraph>
                {content}
                  </Typography>
              <Button variant="subtitle1" onClick={() => artikelNews(link)} style={{ textTransform: 'none' }}>
                Continue reading...
                  </Button>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia style={{ width: 250 }} image={image} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}