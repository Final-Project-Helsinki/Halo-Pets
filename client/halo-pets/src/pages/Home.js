import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import {
  Typography,
  Grid,
  Button
} from '@material-ui/core'

import AppBar from '../components/AppBar'
import DrawerHeader from '../components/DrawerHeader'
import useStyles from '../helpers/style'
import gridUseStyles from '../helpers/gridStyles'

export default function HomePage() {
  const gridClasses = gridUseStyles()
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  function handleMainOpen(isOpen) {
    setOpen(isOpen)
  }

  useEffect(() => {
    navigator.geolocation.watchPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      // setLatitude(position.coords.latitude)
      // setLongitude(position.coords.longitude)
    });
  }, []);

  return (
    <div className={classes.root}>
      <AppBar handleMainOpen={handleMainOpen} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <DrawerHeader />
        <Grid container className={gridClasses.root} >
          <Grid item xs={12} className={gridClasses.display}>
            <Button>HealthCare</Button>
            <Button>Adoption</Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Fakta Unik tentang Kucing</Typography>
            <Typography paragraph>
              Meski bukan favorit semua orang, namun kucing memiliki tabiat yang sering membuat kamu geleng-geleng kepala, hingga membuatmu gemas. Nah, sebagai pecinta kucing, ada beberapa fakta menarik yang mungkin saja kamu baru tahu, nih!

              Mulai dari asupan, tingkah laku, hingga naluri alaminya. Biar nggak salah, inilah fakta unik tentang kucing.

              1. Sebagian kucing nggak toleran terhadap laktosa. Jadi meminum susu yang bukan dari induknya berpotensi untuk menyebabkan dia diare.

              2. Kucing bisa melompat hingga 7 kali lebih tinggi dari tubuhnya sendiri. Hal ini juga berlaku terhadap 'keluarga' spesiesnya, seperti cheetah, puma, jaguar, hingga lynx.

              3. Kucing sebenarnya mempunyai kemampuan berenang, hal ini salah satu naluri dari spesies feline.

              4. Kucing mempunyai reseptor rasa manis yang lemah. Jadi dia nggak begitu peka terhadap rasa manis.

              5. Saat ini terdapat 500 juta kucing domestik di seluruh dunia
 
              6. dwdwdwdwd
        </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Artikel 2</Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Artikel 3</Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Artikel 4</Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Artikel 5</Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}