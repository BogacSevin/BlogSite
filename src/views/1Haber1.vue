<template>
  <div id="app">
    <v-footer id="navbar" color="primary lighten-1" padless>
      <v-app-bar-nav-icon
        color="white"
        style="float: left"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <!-- Footer -->
      <v-row justify="center" no-gutters>
        <v-btn href="/" class="mr-12" color="white " plain white--text>
          Anasayfa</v-btn
        >
        <v-btn
          href="dunya"
          class="mr-12 ml-12"
          color="white "
          plain
          white--text
        >
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
        <v-btn class="mr-12" color="white " plain text white--text>
          Yazılımsal Problemler</v-btn
        >
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-footer>
    <v-container>
      <v-row no-gutters>
        <!-- En Üstteki  -->
        <v-col cols="10">
          <v-card
            style="object-fit: cover; float: left"
            cover
            max-height="4rem"
            outlined
            tile
            class="mr-12"
          >
            <!-- Haber Fotoğrafı -->
            <v-img
              src="https://www.webtekno.com/assets/default/images/970x250.jpg"
            >
            </v-img>
            <!-- Haber Başlığı -->
            <v-text style="margin-left: 15px"
              ><h1>
                <strong
                  >Oyuncuların En Çok Tercih Ettiği İşlemci ve Ekran Kartı
                  Markası Belli Oldu (Intel mi AMD mi?)</strong
                >
              </h1>
              <br />
              <h2>
                <strong
                  >Steam Donanım ve Yazılım Anketi sonuçları açıklandı. Nisan
                  ayı verilerine göre oyuncuların ekran kartı ve işlemci
                  noktasındaki tercihleri yine NVIDIA ve Intel oldu. AMD, son
                  yıllardaki ataklarına rağmen rakiplerine yanaşamıyor.</strong
                >
              </h2>
            </v-text>
            <br />
            <!-- Haberin içeriği -->
            <v-text style="float: left">
              Dünyanın en büyük çevrimiçi oyun platformu Steam, oyunculardan
              topladığı veriler ile en popüler işlemci ve ekran kartı
              markalarının hangileri olduğunu belirledi. Nisan ayı verilerine
              dayanan istatistikler, NVIDIA'nın ekran kartı kategorisinde,
              Intel'in ise işlemci cephesinde zirvede kalmaya devam ettiğini
              gözler önüne seriyor. Gelin Steam'in paylaştığı istatistiklere hep
              birlikte bakalım. Oyunculardan toplanan verilere göre Steam
              kullanıcılarının yüzde 75,85 gibi çok ciddi bir bölümü NVIDIA
              tarafından piyasaya sürülen ekran kartlarını kullanıyor. Bu
              bağlamda en popüler ekran kartı modeli ise NVIDIA GeForce GTX
              1060. Tüm Steam kullanıcılarının yüzde 6,94'lük bölümü bu ekran
              kartını kullanıyor. NVIDIA'ya karşın AMD tarafından üretilen ekran
              kartlarını kullanan oyuncuların oranı ise yüzde 15,02
              seviyelerinde kalmış durumda. Steam'in paylaştığı verilere göre
              oyuncuların yüzde 68,21'lik bölümü Intel tarafından piyasaya
              sürülmüş işlemcileri tercih ediyor. AMD kullanıcılarının oranı ise
              yüzde 31,79 olarak kayıtlara geçti. AMD, son yıllarda dikkate
              değer atılımlar yapmış ve Intel'i köşeye sıkıştırmış olsa da
              oyuncular tarafından tam anlamıyla kabul görmemiş gibi görünüyor.
              Önümüzdeki yıllarda bu durumun değiştiğini görebiliriz. Steam'e
              göre oyuncuların en çok tercih ettikleri işlemci hız aralığı ise
              2,3 Ghz-2,69 Ghz aralığı.
              <!-- Anasayfaya dön butonu -->
              <div class="text-center">
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      id="btn"
                      color="primary"
                      plain
                      v-bind="attrs"
                      v-on="on"
                    >
                      Anasayfaya Dön
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 primary white--text">
                      Haberi faydalı buldunuz mu?
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn href="/" v-on:click="arttir()" icon color="blue">
                        <v-icon>mdi-thumb-up</v-icon>
                      </v-btn>
                      <v-btn
                        href="/"
                        class="ma-2"
                        text
                        icon
                        color="red lighten-2"
                      >
                        <v-icon>mdi-thumb-down</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br
            /></v-text>
          </v-card>
        </v-col>

        <!-- Güncel Haberler -->
        <v-col class="nomobile" cols="2">
          <v-text class="ml-12"> <strong> En Güncel Haberler</strong></v-text>
          <v-card class="ml-12 mt-4">
            <v-img
              height="10rem"
              src="https://imgrosetta.mynet.com.tr/file/14238809/14238809-728xauto.jpg"
            >
              <v-card
                width="1rem"
                height="1rem"
                text-color="white"
                class="red--text text--lighten-5 primary"
              >
                1
              </v-card>
            </v-img>
          </v-card>
          <v-card class="ml-12 mt-4">
            <v-img
              height="10rem"
              src="https://imgrosetta.mynet.com.tr/file/14238809/14238809-728xauto.jpg"
            >
              <v-card
                width="1rem"
                height="1rem"
                text-color="white"
                class="red--text text--lighten-5 primary"
              >
                2
              </v-card>
            </v-img>
          </v-card>
          <v-card class="ml-12 mt-4">
            <v-img
              height="10rem"
              src="https://imgrosetta.mynet.com.tr/file/14238809/14238809-728xauto.jpg"
            >
              <v-card
                width="1rem"
                height="1rem"
                text-color="white"
                class="red--text text--lighten-5 primary"
              >
                3
              </v-card>
            </v-img>
          </v-card>
          <v-card class="ml-12 mt-4">
            <v-img
              height="10rem"
              src="https://imgrosetta.mynet.com.tr/file/14238809/14238809-728xauto.jpg"
            >
              <v-card
                width="1rem"
                height="1rem"
                text-color="white"
                class="red--text text--lighten-5 primary"
              >
                4
              </v-card>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
<style>
#btn {
  float: right;
}
@media screen and (max-width: 600px) {
  .nomobile {
    visibility: hidden;
    clear: both;
    float: right;
    margin: 5px auto;
    width: 22%;
    height: auto;
    display: none;
  }
}
</style>
