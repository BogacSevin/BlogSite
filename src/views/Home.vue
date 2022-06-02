<template>
  <div id="app">
    <v-footer id="navbar" color="primary lighten-1" padless>
      
      <v-row justify="center" no-gutters>
        <v-btn href="dunya" class="mr-12" color="white " plain white--text>
          DÜNYA GÜNDEMİ</v-btn
        >
        <v-btn
          href="teknoloji"
          class="mr-12"
          color="white "
          plain
          text
          white--text
        >
          TEKNOLOJİ HABERLERİ</v-btn
        >
        <v-btn
          href="profil"
          class="mr-12"
          color="white "
          plain
          text
          white--text
        >
          Donanımsal Problemler</v-btn
        >
        <v-btn href="about" class="mr-12" color="white " plain text white--text>
          Yazılımsal Problemler</v-btn
        >
      </v-row>
    </v-footer>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <v-container>
      <v-row no-gutters>
        <!-- En Üstteki  -->
        <v-col cols="12">
          <v-card
            href="1Haber1"
            style="object-fit: cover"
            cover
            max-height="12rem"
            outlined
            tile
          >
            <v-img
              max-height="12rem"
              src="https://www.webtekno.com/assets/default/images/970x250.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
        <!-- 2. satır 1.s bölüm -->
        <v-col cols="8">
          <v-card
            to="1Haber1"
            class="mx-auto ml-2 mt-2"
            max-height="12rem"
            tile
          >
            <v-img
              id="img"
              max-height="12rem"
              class="white--text align-end"
              src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/05/akis-platformlari-dususte1.jpg?resize=612%2C477&ssl=1"
            >
            </v-img>
              <v-toolbar-title id="text" class="pl-12 text-h4 white--text pl-0">
                <strong class="ml-12  ">Twich Yayıncılarına Kötü Haber</strong>
              </v-toolbar-title>
          </v-card>
        </v-col>
        <!-- 2. Satır 2. Bölüm -->
        <v-col cols="4">
          <v-card
            to="1Haber1"
            class="mx-auto ml-2 mt-2"
            max-height="12rem"
            tile
          >
            <v-img
              id="img"
              max-height="12rem"
              class="white--text align-end"
              src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/05/akis-platformlari-dususte1.jpg?resize=612%2C477&ssl=1"
            >
            </v-img>
              <v-toolbar-title id="text" class="pl-3 text-h4 white--text pl-0">
                <strong class="ml-2">Twich Yayıncılarına Kötü Haber</strong>
              </v-toolbar-title>
          </v-card>
        </v-col>
        <!-- 3. satır 1. bölüm -->
        <v-col cols="4">
          <v-card
            to="1Haber1"
            class="mx-auto ml-2 mt-2"
            max-height="12rem"
            tile
          >
            <v-img
              id="img"
              max-height="12rem"
              class="white--text align-end"
              src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/05/akis-platformlari-dususte1.jpg?resize=612%2C477&ssl=1"
            >
            </v-img>
              <v-toolbar-title id="text" class="pl-3 text-h4 white--text pl-0">
                <strong class="ml-2">Twich Yayıncılarına Kötü Haber</strong>
              </v-toolbar-title>
          </v-card>
        </v-col>
        <!-- 3. satır 2. bölüm -->
        <v-col cols="4">
          <v-card
            to="1Haber1"
            class="mx-auto ml-2 mt-2"
            max-height="12rem"
            tile
          >
            <v-img
              id="img"
              max-height="12rem"
              class="white--text align-end"
              src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/05/akis-platformlari-dususte1.jpg?resize=612%2C477&ssl=1"
            >
            </v-img>
              <v-toolbar-title id="text" class="pl-3 text-h4 white--text pl-0">
                <strong class="ml-2">Twich Yayıncılarına Kötü Haber</strong>
              </v-toolbar-title>
          </v-card>
        </v-col>
        <!-- 3. satır 3. bölüm -->
        <v-col cols="4">
          <v-card
            to="1Haber1"
            class="mx-auto ml-2 mt-2"
            max-height="12rem"
            tile
          >
            <v-img
              id="img"
              max-height="12rem"
              class="white--text align-end"
              src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/05/akis-platformlari-dususte1.jpg?resize=612%2C477&ssl=1"
            >
            </v-img>
              <v-toolbar-title id="text" class="pl-3 text-h4 white--text pl-0">
                <strong class="ml-4">Twich Yayıncılarına Kötü Haber</strong>
              </v-toolbar-title>
          </v-card>
        </v-col>
        <!-- 4.bölüm -->
        <v-col href="1Haber1" cols="4">
          <v-card class="mx-auto" max-height="10rem" tile> </v-card>
        </v-col>

        <!-- 5. bölüm -->
        
        <v-row class="mt-12">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="mb-12 lg:mb-20 max-w-[620px]">
                <h2
                  id="h6"
                  class="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 ml-4"
                >
                  Geçmiş Haberler
                </h2>
              </div>
            </div>
          </div>
          <v-col cols="12">
              <v-sheet
      class="mr-4"

      max-width="1200"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            
            class="ma-4"
            height="100%"
            width="600"
            @click="toggle"
          >
          <v-img
              id="img"
              max-height="12rem"
              class="white--text align-end"
              src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/05/akis-platformlari-dususte1.jpg?resize=612%2C477&ssl=1"
            >
            </v-img>
              <v-toolbar-title id="text" class=" text-h4 white--text ">
                <strong class="ml-4">Twich Yayıncılarına Kötü Haber</strong>
              </v-toolbar-title>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
          </v-col>
        </v-row>
       

        <!-- 6. Bölüm -->
        
        <v-row >
        <v-col cols="12" >
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="mb-12 lg:mb-20 max-w-[620px]">
                <h2
                  id="h6"
                  class="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 ml-4"
                >
                  Yayın Akışı
                </h2>
              </div>
            </div>
          </div>
        </v-col>
        

        <v-col cols="7">
          <v-btn   
        fab
        dark
        small
        color="primary"
      >
        <v-icon dark>
          mdi-minus
        </v-icon>
      </v-btn>
      <v-text class="ml-3"> 
        <strong>
        Siyaset
        </strong>
      </v-text>
          <v-card
            href="1Haber1"
            class=" mx-auto ml-12 mt-2"
            max-height="15rem" 
            tile
          >     
          
            <v-img

              max-height="15rem"
              class="white--text align-end "
              src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2022/05/akis-platformlari-dususte1.jpg?resize=612%2C477&ssl=1"
            >
            </v-img>
          </v-card>
          
        </v-col>
        <v-col cols="4" class="mt-12">
            <h2><strong>Haber Başlığı</strong></h2>
            <br>
            <h4>askdglmasdgkasjndgmasdkgjnlmasdgkaslndgmasdgklm <v-link class="blue--text">Devamını Oku</v-link></h4>
        </v-col>
        

       

        
        </v-row>

      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
  }),
};
</script>
<style>
#strong {
  font-size: 2vh;
}
#h6 {
  color: #0f3cd2;
}
#img {
  filter: blur(1.6px);
position: relative;
}
#img:hover {
  filter: blur(0);
}
#text {
  position:absolute;left:10px;bottom:10px;
  -webkit-filter: brightness(180%);
  filter: brightness(180%);
  max-width:90% ;
  text-align: center;
}
.animated {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

@keyframes fadeInUp {
  from {
    filter: opacity(100%);
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    filter: opacity(50%);
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
</style>
