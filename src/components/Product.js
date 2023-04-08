import { Container, Grid } from "@material-ui/core";
import React from "react";
import './App.css';
import CustomizedRating from "./Rating";



export default function Prod(){
  return(
  <Container sx={{marginY:25}} id='cont'>
   <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter"> BEST ANIME</h3>
      {/* <h4>Pick and vote</h4> */}
    </div>
  </div>
</div>
    <Grid container spacing={3}>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt9335498/" target="_blank"><img src='https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg' id='imge'></img></a>
        <h3>Demon Slayer</h3>
        <p>IMDB 8.7/10 </p>
        <CustomizedRating/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt0388629/" target="_blank"><img src='https://preview.redd.it/mqupeeot6k731.jpg?auto=webp&s=45fd760a7d8f0d1679fd1a35f13fd775fcef4a1d' id='imge'></img> </a>
      <h3>One Piece</h3>
      <p>IMDB 8.9/10</p>
      <CustomizedRating/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt0988824/?ref_=fn_al_tt_1" target="_blank"><img src='https://images.justwatch.com/poster/36712203/s718/naruto-shippuden.%7Bformat%7D' id='imge'></img></a>
      <h3>Naruto Shippuden</h3>
      <p>IMDB 8.7/10</p>
      <CustomizedRating/>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt7441658/" target="_blank"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4knc90ghYetu8LwwxEiIbrjLh_7Hk5_90cawus-Drw7fIbgVwQtUrPLFrk9jk6RCY0I&usqp=CAU' id='imge'></img></a>
      <h3>Black Clover</h3>
      <p>IMDB 8.3/10</p>
      <CustomizedRating/>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt4731072/" target="_blank"><img src='https://images.fanart.tv/fanart/food-wars-shokugeki-no-soma-559f8585241e2.jpg' id='imge'></img></a>
      <h3>FoodWars</h3>
      <p>IMDB 8.1/10</p>
      <CustomizedRating/>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt0877057/?ref_=nv_sr_srsg_0" target="_blank"><img src='https://cdn.europosters.eu/image/750/posters/death-note-duo-i30570.jpg' id='imge'></img></a>
      <h3>DeathNote</h3>
      <p>IMDB 9/10</p>
      <CustomizedRating/>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt9679542/?ref_=fn_al_tt_1" target="_blank"><img src='https://i5.walmartimages.com/asr/451bba2d-2eac-41ef-8a81-8cf487b4078c.35c65e316a2bdff53cd02e939fead329.jpeg' id='imge'></img></a>
      <h3>Dr.Stone</h3>
      <p>IMDB 8.1/10</p>
      <CustomizedRating/>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt13616990/?ref_=nv_sr_srsg_0" target="_blank"><img src='https://e1.pxfuel.com/desktop-wallpaper/4/1021/desktop-wallpaper-denji-chainsaw-man-chainsaw-man-thumbnail.jpg' id='imge'></img></a>
      <h3>ChainsawMan</h3>
      <p>IMDB 8.5/10</p>
      <CustomizedRating/>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt15222080/?ref_=fn_al_tt_1" target="_blank"><img src='https://cdn.myanimelist.net/images/anime/1258/126929.jpg' id='imge'></img></a>
      <h3>BlueLock</h3>
      <p>IMDB 8.4/10</p>
      <CustomizedRating/>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt6342474/?ref_=nv_sr_srsg_0" target="_blank"><img src='https://i.pinimg.com/originals/ef/5c/56/ef5c5613816ccad4b1815a7a3faf2785.png' id='imge'></img></a>
      <h3>Boruto</h3>
      <p>IMDB 6.7/10</p>
      <CustomizedRating/>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt14115938/?ref_=nv_sr_srsg_0" target="_blank"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RrLlMr3YKhuJ80U0rN0i45lV54Xj81xwNcZcmiglB5kWpitbAtbZW3zT0nROHNSzKmW3kLL8akk&usqp=CAU&ec=48600112' id='imge'></img></a>
      <h3>Eminence in Shadow</h3>
      <p>IMDB 7.9/10</p>
      <CustomizedRating/>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
      <a href="https://www.imdb.com/title/tt0434665/?ref_=fn_al_tt_1" target="_blank"><img src='https://e1.pxfuel.com/desktop-wallpaper/352/937/desktop-wallpaper-bleach-memories-of-nobody-mobile-bleach-poster-thumbnail.jpg' id='imge'></img></a>
      <h3>Bleach</h3>
      <p>IMDB 8.2/10</p>
      <CustomizedRating/>
      </Grid>


      
      
    </Grid>
  </Container>
  );
}