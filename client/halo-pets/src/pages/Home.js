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
import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardRoute from '../components/CardRoute'

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
<CardRoute />
          </Grid>
          <Grid item xs={10}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} variant="h5">Fakta Unik tentang Kucing</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Meski bukan favorit semua orang, namun kucing memiliki tabiat yang sering membuat kamu geleng-geleng kepala, hingga membuatmu gemas. Nah, sebagai pecinta kucing, ada beberapa fakta menarik yang mungkin saja kamu baru tahu, nih!

                  Mulai dari asupan, tingkah laku, hingga naluri alaminya. Biar nggak salah, inilah fakta unik tentang kucing.

                  1. Sebagian kucing nggak toleran terhadap laktosa. Jadi meminum susu yang bukan dari induknya berpotensi untuk menyebabkan dia diare.

                  2. Kucing bisa melompat hingga 7 kali lebih tinggi dari tubuhnya sendiri. Hal ini juga berlaku terhadap 'keluarga' spesiesnya, seperti cheetah, puma, jaguar, hingga lynx.

                  3. Kucing sebenarnya mempunyai kemampuan berenang, hal ini salah satu naluri dari spesies feline.

                  4. Kucing mempunyai reseptor rasa manis yang lemah. Jadi dia nggak begitu peka terhadap rasa manis.

                  5. Saat ini terdapat 500 juta kucing domestik di seluruh dunia

                  6. dwdwdwdwd
          </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading} variant="h5">Bagaimana kita tahu apakah hewan sedang merasa senang atau tidak</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Binatang menggunakan ekor mereka untuk mengendalikan arah, menahan, menyeimbangkan tubuh, dan berenang, tapi mereka juga menggunakan ekor sebagai cara untuk berkomunikasi dengan satu sama lain.
                  Seekor anjing yang mengibas-ngibaskan ekornya adalah salah satu contohnya. Kita biasanya memahami kibasan ekor sebagai tanda bahwa seekor anjing sedang senang.
                  Namun, kibasan ekor bukan satu-satunya cara untuk mengetahui kapan mereka senang. Ada banyak binatang yang tidak memiliki ekor atau tidak menggunakan ekor untuk berkomunikasi dengan satu sama lain.
                  Jadi, bagaimana caranya kita mengetahui apakah seekor binatang sedang senang tanpa kibasan ekor?
                  Binatang memiliki cara yang berbeda-beda untuk menunjukkan kesenangan mereka, jadi kita perlu mengetahui lebih lanjut tentang masing-masing hewan.
                  Sebagai contoh, kucing mendengkur ketika sedang senang (walau beberapa kucing juga mendengkur ketika mereka sedang kesakitan). Marmut bersiul ketika gembira dan mendengkur ketika senang.
                  Kelinci mengernyitkan hidung ketika senang dan kelinci juga bisa mengeluarkan suara mirip dengkuran dengan menggertakkan gigi. Ini biasanya menunjukkan bahwa kelinci sedang senang, tapi seperti kucing, terkadang kelinci mengeluarkan suara dengkuran keras ketika kesakitan.
                  Musang mengeluarkan suara cuitan ketika mereka senang dan gembira, kuda akan mengarahkan telinganya ke arah kamu dan mulutnya rileks, dan burung kakatua bernyanyi, bersiul, atau mengeluarkan suara gesekan, dengkuran dengan paruhnya ketika senang.
                  Jadi, ada cara yang berbeda-beda bagi binatang untuk mengekspresikan kesenangan mereka, tapi terkadang mereka melakukan hal yang sama ketika kesakitan. Sangat membingungkan!
                  Seringkali, kita bisa cukup tahu apakah binatang sedang senang atau tidak dengan mengamati cara mereka berperilaku secara umum.
                  Kucing yang mendengkur karena senang mungkin juga akan melingkarkan badannya di sekitar kaki kamu, atau rileks di pangkuan kamu, mengangkat ekornya tinggi-tinggi, atau berguling ke belakang. Ini semua menunjukkan bahwa kucing itu mempercayai dan tertarik dengan kamu.
                  Demikian pula, seekor kelinci yang menggertakkan gigi sembari rileks kemungkinan besar juga akan merenggangkan badannya pada saat yang sama. Kamu bisa mengira-ngira seberapa rileks seekor kelinci dengan mengamati seberapa renggang badannya ketika beristirahat.
                  Jika seekor kelinci sedang kesakitan, biasanya membungkuk dan memejamkan matanya setengah tertutup seperti sedang meringis. Binatang yang rileks dan tidak tegang biasanya sedang merasa senang dan nyaman.
                  Kita juga bisa mengetahui seberapa senangnya suatu binatang dengan melihat apa yang mereka lakukan.
                  Bermain adalah salah satu hal yang paling pasti untuk mengetahui apakah seekor binatang sedang senang atau tidak, karena hanya binatang yang sedang senang yang bermain.
                  Binatang yang senang dan suka bermain akan lompat ke udara, menyambar, menendang kaki mereka ke atas ketika berlarian, dan secara umum lebih energik daripada biasanya.
                  Terakhir, kita bisa melihat pertanda binatang sedang senang dengan memperhatikan apa suka ia lakukan berulang kali.
                  Jika peliharaan kamu berulang kali berjemur di bawah matahari atau mencari cemilan enak atau menggali lubang, maka kita bisa tahu bahwa ketika mereka melakukannya, mereka kemungkinan sedang senang.
                  Jadi, untuk mengetahui kapan seekor binatang sedang senang, kita perlu melihat lebih dari apa yang dilakukan oleh satu bagian tubuh, dan kita mungkin perlu untuk mengamati mereka untuk mengenal mereka lebih dalam.
                  Untuk menjadi teman yang baik bagi peliharaan kita, kita perlu memberikan mereka kebebasan memilih aktivitas mereka sendiri, sehingga mereka bisa menunjukkan pada kita apa yang mereka sukai.
                  Selamat mengamati!
          </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading} variant="h5">Fakta Seputar Hewan Peliharaan dan Virus Corona</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sampai saat ini Organisasi Kesehatan Dunia (WHO) menyatakan belum ada bukti kalau hewan peliharaan dapat tertular atau menyebarkan COVID-19. Memang pernah ada pengujian seekor anjing di Hong Kong yang dinyatakan menunjukkan gejala corona ringan, tetapi belum bisa dinyatakan kalau memang hewan peliharaan bisa tertular dan menularkan.
                  Walaupun begitu, direkomendasikan untuk membatasi kontak dengan anjing, kucing, atau hewan lain jika kamu mengidap COVID-19. Informasi lebih jelas mengenai hewan peliharaan dan virus corona, bisa dibaca di bawah ini!
                  Tidak Ada Penyebaran Manusia ke Hewan
                  Menurut Shelley Rankin Ph.D, profesor mikrobiologi klinis dan kepala layanan diagnostik di Rumah Sakit Hewan Matthew J. Ryan di Fakultas Kedokteran Hewan, Universitas Pennsylvania, menyebutkan kalau belum ada penyebaran corona antara manusia ke hewan.
                  Ada tujuh jenis virus corona yang diketahui menginfeksi manusia, dan beberapa lainnya dapat menginfeksi hewan. Anjing dapat tertular virus corona yang dikenal canine enteric coronavirus, yang menyebabkan penyakit pencernaan ringan, terutama pada anak anjing. Kemudian, ada juga canine respiratory coronavirus yang menyebabkan infeksi saluran pernapasan atas sehingga memicu batuk, bersin, dan keluarnya cairan dari hidung. Menurut American Veterinary Medical Association (AVMA), corona jenis ini adalah bagian dari kelompok virus dan bakteri yang terkait dengan penyakit pernapasan infeksi anjing.
                  Feline coronavirus adalah infeksi virus yang umum pada kucing dan dapat menyebabkan diare ringan. Namun sekali lagi, menurut Fakultas Kedokteran Hewan Universitas Cornell, tidak ada jenis virus corona ini yang COVID-19.
                  Meskipun belum ada laporan tentang hewan peliharaan atau hewan lain yang sakit karena COVID-19, tetapi pemilik hewan peliharaan yang terindikasi COVID-19 wajib membatasi kontak dengan hewan sampai kita mendapatkan informasi lebih valid terkait penyebaran COVID-19 ini.
                  Pentingnya Menjaga Kebersihan
                  Jika kondisimu saat ini sedang tidak sehat, mintalah orang lain untuk merawat hewan peliharaan—apalagi jika kamu terinfeksi COVID-19. Namun, jika kamu harus menangani hewan peliharaan sendiri, tetaplah jaga kebersihan dengan baik.

                  Cuci tangan dengan baik sebelum dan setelah berinteraksi dengan hewan peliharaan dan jangan lupa untuk mengenakan masker wajah. Hindari kontak dengan hewan peliharaan jika memungkinkan, termasuk membelai, meringkuk, dicium atau dijilat, dan berbagi makanan.
                  Sampai saat ini kita tidak tahu pasti apakah virus dapat menginfeksi hewan peliharaan, jadi saran terbaik adalah bagi orang yang terinfeksi untuk tidak melakukan kontak dengan hewan peliharaan selama masa karantina.

                  Terlepas dari COVID-19, pentingnya menjaga kebersihan karena hewan peliharaan dapat menyebarkan penyakit lain kepada manusia, seperti salmonella dan parasit lainnya. Karena itu, jangan abai terhadap kebersihan dan kesehatan hewan peliharaanmu.

                  Jika kamu khawatir tentang kemungkinan paparan, kamu bisa memandikan hewan peliharaan dengan sabun atau sampo yang biasa digunakan sesuai dengan kebutuhan hewan tersebut.

          </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading} variant="h5">Ketahui tentang Virus Parvo yang Bisa Menyerang Anjing dan Kucing</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Virus parvo, disebut juga Canine parvovirus (CPV) adalah salah satu virus paling serius yang bisa menyerang anjing. Virus ini ditemukan pada tahun 1967 dan dengan cepat menjadi ancaman serius bagi kesehatan anjing. Hal ini karena virus ini sulit untuk dibunuh, dapat hidup lama di lingkungan, dan dilepaskan dalam jumlah besar oleh anjing yang terinfeksi.

                  Pada kucing, infeksi parvovirus dikenal dengan nama feline panleukopenia, yang disebabkan oleh Feline parvovirus (FPV). Virus tersebut terkait erat dengan canine parvovirus, yang biasa menyerang anjing. Saat menginfeksi, virus tersebut hanya akan menyerang sel mitosis atau yang aktif membelah, terutama sel-sel di saluran usus, sumsum tulang, dan kulit, serta menyebabkan kondisi anemia.
                  Gejala Infeksi Virus Parvo pada Anjing dan Kucing
                  Infeksi virus parvo pada anjing sangat berbahaya karena menyerang sel yang membelah dengan cepat di sumsum tulang dan usus. Setelah sumsum tulang terpengaruh, jumlah sel darah putih hewan turun, risiko infeksi meningkat, dan sistem kekebalan mulai menurun.

                  Ketika sel-sel usus terpengaruh, lapisan usus menjadi rusak dan tubuh tidak dapat lagi menyerap nutrisi atau mencerna makanan dengan baik. Akibatnya adalah mual, muntah, dehidrasi, dan diare parah. Virus parvo biasanya menyebabkan diare yang berdarah dengan bau yang jauh lebih buruk daripada kotoran normal anjing.

                  Saat penyakit tersebut menyerang tubuh, anjing menjadi sangat lemah dan dehidrasi. Selain itu, anjing juga dapat mengalami sepsis, yaitu infeksi pada darah yang dapat terjadi ketika dinding usus tidak dapat bertindak sebagai penghalang terhadap bakteri.
                  Infeksi virus parvo menyerang kucing juga dapat memunculkan gejala, seperti:

                  Muntah.
                  Diare/diare berdarah.
                  Dehidrasi.
                  Penurunan berat badan.
                  Demam tinggi.
                  Anemia (karena penurunan sel darah merah).
                  Bulu kasar.
                  Depresi.
                  Kehilangan selera makan.
                  Gejala neurologis, misal kurangnya koordinasi.

                  Cara Penularan Virus Parvo pada Anjing dan Kucing
                  Virus parvo paling sering menyerang anak anjing, tetapi anjing dewasa juga dapat tertular penyakit ini jika tidak divaksinasi. Seekor anjing yang sistem kekebalannya terganggu (karena kondisi medis lain) juga berisiko mengalami infeksi Canine parvovirus (CPV).

                  Seekor anjing dapat terinfeksi virus parvo setelah bersentuhan, mencium, atau memakan dengan partikel mikroskopis virus dari kotoran anjing yang terkontaminasi. Virus memasuki sistem tubuh anjing melalui mulut atau hidung. Kemudian, dibutuhkan sekitar tiga hingga tujuh hari hingga penyakit menjadi aktif di dalam tubuh.

                  Dalam beberapa hari, virus akan ditemukan di kotoran anjing yang sakit. Pada titik inilah hal itu dapat memengaruhi anjing lain. Gejala umumnya tidak muncul lagi selama beberapa hari. Virus terus berada di kotoran selama anjing sakit dan beberapa minggu setelah sembuh.

                  Partikel virus parvo juga dapat hidup di tanah atau lingkungan luar ruangan lainnya selama lima hingga tujuh bulan dan bahkan lebih lama di iklim dingin, karena virus dapat bertahan pada suhu beku. Jika partikel tersebut mengenai kaki atau bulu anjing dan kemudian tertelan, anjing tersebut dapat terinfeksi.

                  Sementara itu, pada kucing, Feline parvovirus (FPV) dapat ditularkan ke kucing lain saat bersentuhan dengan darah, kotoran, urine, atau cairan tubuh lainnya yang terinfeksi. Virus ini juga dapat menetap di banyak permukaan benda. Selain itu, anak kucing dapat tertular penyakit ini dalam kandungan atau melalui ASI jika ibu hamil atau menyusui terinfeksi.

                  Meskipun anjing tidak dapat tertular FPV dari kucing, kucing dapat terinfeksi CPV dari anjing. Kucing biasanya memiliki gejala CPV yang jauh lebih ringan daripada anjing. Terkadang, CPV pada anjing juga dapat menyebabkan penyakit parah pada kucing.

                  Baik pada anjing atau kucing, infeksi virus parvo perlu segera diobati. Jika kamu menjumpai berbagai gejala infeksi virus ini pada anjing atau kucing kamu, sebaiknya segera bawa ke dokter hewan untuk diperiksa dan ditangani, sesuai kondisinya.

          </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading} variant="h5">Manfaat Psikologis Punya Hewan Peliharaan di Masa Pandemi</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                           Hampir satu tahun pandemi COVID-19 di Indonesia berlangsung. Banyak orang yang terpisah akibat kondisi tersebut. Alhasil, kesepian dan stres menjadi makanan sehari-hari.

           Untungnya, bagi mereka yang punya hewan peliharaan, masalah psikologis seperti itu bisa lebih teratasi.

           Hilangnya Sentuhan selama Pandemi Berlangsung
           Kesepian ini tak cuma berlaku untuk mereka yang tinggal sendirian. Mereka yang tinggal bersama pasangan, kerabat, atau keluarga pun tetap merasakan kekosongan, khususnya dalam hal sentuhan. 

           Ya, menjaga jarak memang menjadi salah satu frasa yang paling sering didengar di tahun 2020. Karena itulah, sentuhan antar-manusia pun kian berkurang.

           Hal itu diungkapkan oleh Tiffany Field, Ph.D., seorang Direktur dari Touch Research Institute Leonard M. Miller School of Medicine di University of Miami, Amerika Serikat. 

           Menurut survei yang dia lakukan, 60 persen orang sangat merasakan efek dari hilangnya sentuhan.

           Sebenarnya, sebelum adanya pandemi COVID-19, menurunnya intensitas kontak fisik sebenarnya juga sudah mulai dirasakan. Hal ini semakin menjadi semenjak adanya media sosial dan aplikasi komunikasi lainnya.

           Bagaimana Hewan Peliharaan Bisa Membantu? 

           Fokus dari kebutuhan sosial yang hilang adalah sentuhan. Kebutuhan sentuhan itu akhirnya didapatkan melalui hewan peliharaan.

           Janette Young, Ph.D., dosen ilmu kesehatan di University of South Australia mengungkapkan hal itu kepada Healthline. 

           Lebih dari 90 persen orang merasa bahwa menyentuh dan disentuh oleh hewan peliharaan, seperti kucing dan anjing, dapat menghilangkan rasa sedih, tertekan, serta trauma.

           “Selain itu, bersentuhan dengan hewan peliharaan memang memberikan kenyamanan dan keintiman tersendiri,” kata Young. 

           Manfaat sentuhan ini tak cuma diberikan oleh hewan seperti kucing dan anjing. Peneliti mengatakan, burung, domba, kuda, bahkan reptil juga akan membalas sentuhan ketika Anda menyentuh mereka. 

           Mengelus punggung dan kepala hewan peliharaan Anda dapat menurunkan hormon stres serta membangkitkan neurotransmitter alami tubuh untuk meredakan nyeri. Detak jantung juga jadi lebih stabil dan tekanan darah yang tinggi perlahan menurun. 

           Senada dengan para ahli di atas, Gracia Ivonika, M. Psi., Psikolog juga mengatakan bahwa sudah banyak penelitian yang melaporkan tentang manfaat hewan peliharaan yang sangat berkontribusi positif bagi kesehatan mental. 

           “Berinteraksi dengan hewan terbukti dapat menurunkan kadar stres dan kecemasan. Dopamin dan oksitosin yang mengatur perasaan senang, semangat, motivasi, bonding, dan relasi sosial juga meningkat. Karena itu, tak ada salahnya memiliki hewan peliharaan, terlebih selama pandemi,” jelasnya.

           Secara garis besar, beginilah manfaat punya hewan peliharaan padai masa pandemi virus coroan berdasarkan usia menurut psikolog Gracia:

           Anak-anak: Melatih tanggung jawab dan pengasuhan serta memberikan kenyamanan. 
           Dewasa dan lansia: Meringankan perasaan kesepian, memberikan kesempatan untuk bercanda, dan memberi alasan untuk beraktivitas lebih. 
           Remaja dan dewasa muda: Memberikan rasa penerimaan tanpa syarat selama masa-masa yang tidak aman (mencegah insecure di masa pandemi) dan menghilangkan keraguan diri.
           Gracia menambahkan, “Baik hewan interaktif seperti anjing dan kucing maupun hewan yang kurang interaktif seperti ikan dan kura-kura, semuanya memberikan manfaat yang sama. Jadi sesuaikan saja dengan kebutuhan dan kesukaan Anda.”

           Apa Bisa Menggantikan Interaksi selama Pandemi dengan Manusia?

           Terlepas dari segala dampak positif memelihara hewan, pada dasarnya interaksi dengan hewan tetaplah berbeda dengan interaksi dengan manusia. 

           “Karena bagaimana pun juga, manusia itu makhluk sosial. Jadi, hewan peliharaan tetap tidak bisa menggantikan kebutuhan sosial itu sepenuhnya,” ucap Gracia.

           “Hewan peliharaan dapat menjadi salah satu sumber untuk membantu memenuhi kebutuhan sosial dan emosional, bukan sepenuhnya menggantikan,” dia menegaskan kembali.

           Tetaplah jalin komunikasi dengan orang-orang terdekat, baik secara langsung tanpa melupakan protokol kesehatan maupun secara virtual.

           Jika kondisinya sehat dan memungkinkan, tetaplah bersentuhan dengan orang-orang yang Anda sayangi, khususnya keluarga.

           Jika Anda bukan penggemar berat hewan peliharaan, kebutuhan sentuhan sementara bisa “diselamatkan” dengan olahraga atau aktivitas fisik lainnya. Kegiatan tersebut tetap dapat merangsang reseptor tekanan pada tubuh. 

          </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography className={classes.heading}>Disabled Accordion</Typography>
              </AccordionSummary>
            </Accordion>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}