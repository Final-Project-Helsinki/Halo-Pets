import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeatured';
import CardRoute from '../components/CardRoute';
import CardArtikel from '../components/CardArtikel';
import gridUseStyles from '../helpers/gridStyles'
import { db } from '../services/firebase'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'Adoption', url: '/adoption' },
  { title: 'My Pet Favorites', url: '/favorites' },
  { title: 'Health Care', url: '/healthcare' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://cdn.discordapp.com/attachments/822083494762119168/823913593552371712/slide4.png',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Blog() {
  const classes = useStyles();

  const gridClasses = gridUseStyles()
  const [articles, setArticles] = useState([])
  // const history = useHistory()

  useEffect(() => {
    navigator.geolocation.watchPosition(function (position) {

      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      // setLatitude(position.coords.latitude)
      // setLongitude(position.coords.longitude)
    });
    async function fetchArticles() {
      try {
        db.ref("articles").on("value", snapshot => {
          let articlesFirebase = [];
          snapshot.forEach((snap) => {
            articlesFirebase.push(snap.val());
          });
          setArticles(c => articlesFirebase)
        });
      } catch (error) {
        // setreadError(error.message)
        console.log(error.message)
      }
    }
    fetchArticles()
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Hi Pets" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}> */}
            {/* {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
          {/* </Grid> */}
          <Grid container className={gridClasses.root} spacing={4} >

            {
              articles.map((article) => (
                <CardArtikel key={article.title} articles={article} />
              ))
            }

          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
  );
}