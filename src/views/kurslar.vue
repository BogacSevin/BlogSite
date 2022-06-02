<template>
  <v-app id="inspire">
    <v-footer id="navbar" color="primary lighten-1" padless>
      <!-- FOOTER -->
      <v-row justify="center" class="pa-3" no-gutters>
        <v-btn href="/" class="pt-3 mr-12" color="white " plain white--text>
          Anasayfa</v-btn
        >
        <v-btn
          href="dunya"
          class="pt-3 mr-12 ml-12"
          color="white "
          plain
          white--text
        >
          DÜNYA GÜNDEMİ</v-btn
        >
        <v-btn
          href="teknoloji"
          class="pt-3 mr-12"
          color="white "
          plain
          text
          white--text
        >
          TEKNOLOJİ HABERLERİ</v-btn
        >
        <v-btn
          href="profil"
          class="pt-3 mr-12"
          color="white "
          plain
          text
          white--text
        >
          Donanımsal Problemler</v-btn
        >
        <v-btn
          href="about"
          class="pt-3 mr-12"
          color="white "
          plain
          text
          white--text
        >
          Yazılımsal Problemler</v-btn
        >
        <!-- Profil -->
       
      </v-row>
      <!-- Giriş Yap -->
      
    </v-footer>
    <v-app-bar-nav-icon id="mobil" @click="drawer = true"></v-app-bar-nav-icon>

    <v-container fluid>
      <v-img
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
      </v-img>
      <v-row justify="center">
        <v-col
          align-self="start"
          class="d-flex justify-center align-center pa-0"
          cols="12"
        >
          <v-avatar
            class="profile avatar-center-heigth"
            color="grey"
            size="164"
          >
            <v-img
              src="https://media-exp1.licdn.com/dms/image/C5603AQEOxir5pIEmsA/profile-displayphoto-shrink_100_100/0/1643647236979?e=1653523200&v=beta&t=ucs7yunodzKdFPKa8GLywopEFuZ2CmcUL6Cr_p2_J7M"
            ></v-img>
          </v-avatar>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center py-0" cols="12">
          <v-list-item color="#0000" class="profile-text-name">
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Muhsin Boğaç Sevin
              </v-list-item-title>
              <v-list-item-subtitle>Frond-end Developer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-row>
          <!-- 1. satır 1. bölüm -->
          <v-col cols="4">
            <div class=" flex flex-wrap -mx-4">
              <div class="w-full px-4">
                <div class="mb-6 mt-6 ml-12 lg:mb-20 max-w-[620px]">
                  <h2
                    id="h6"
                    class="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 ml-10"
                  >
                    Başlıklar
                  </h2>
                  <v-col cols="4">
                    <v-col id="nomobile" cols="4">
                      <v-responsive
                        class="overflow-y-auto"
                        min-width="20rem"
                        max-height="15rem"
                      >
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Two-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title
                              >Three-line item</v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-responsive
                          max-height="250vh"
                          class="text-center pa-2"
                        >
                          <v-responsive
                            min-height="50vh"
                            min-width="10vh"
                          ></v-responsive>

                          <v-lazy
                            v-model="isActive"
                            :options="{
                              threshold: 0.5,
                            }"
                            min-height="200"
                            transition="fade-transition"
                          >
                          </v-lazy>
                        </v-responsive>
                      </v-responsive>
                    </v-col>
                  </v-col>
                </div>
              </div>
            </div>
          </v-col>
          <!-- 1. Satır 2. Bölüm -->
          <v-col cols="4">
            <div class="ml-12 flex flex-wrap -mx-4">
              <div class="w-full px-4">
                <div class="mb-6 mt-6 lg:mb-20 max-w-[620px]">
                  <h2
                    id="h6"
                    class="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 ml-10"
                  >
                    Yardımlar
                  </h2>
                  <v-col cols="4">
                    <v-col id="nomobile" cols="4">
                      <v-responsive
                        class="overflow-y-auto"
                        min-width="20rem"
                        max-height="15rem"
                      >
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>

                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item two-line href="profil">
                          <v-list-item-content>
                            <v-list-item-title>One-line item</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>

                        <v-responsive
                          max-height="250vh"
                          class="text-center pa-2"
                        >
                          <v-responsive
                            min-height="50vh"
                            min-width="10vh"
                          ></v-responsive>

                          <v-lazy
                            v-model="isActive"
                            :options="{
                              threshold: 0.5,
                            }"
                            min-height="200"
                            transition="fade-transition"
                          >
                          </v-lazy>
                        </v-responsive>
                      </v-responsive>
                    </v-col>
                  </v-col>
                </div>
              </div>
            </div>
          </v-col>
          <!-- 1. Satır 3. Bölüm -->
          <v-col cols="4">
            <div class="ml-12 flex flex-wrap -mx-4">
              <div class="w-full px-4">
                <div class="mb-6 mt-6 lg:mb-20 max-w-[620px]">
                  <h2
                    id="h6"
                    class="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 ml-6"
                  >
                    Beğenilen Gönderiler
                  </h2>
                  <v-col id="nomobile" cols="4">
                    <v-responsive
                      class="overflow-y-auto"
                      min-width="20rem"
                      max-height="15rem"
                    >
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item two-line href="profil">
                        <v-list-item-content>
                          <v-list-item-title>One-line item</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-responsive max-height="250vh" class="text-center pa-2">
                        <v-responsive
                          min-height="50vh"
                          min-width="10vh"
                        ></v-responsive>

                        <v-lazy
                          v-model="isActive"
                          :options="{
                            threshold: 0.5,
                          }"
                          min-height="200"
                          transition="fade-transition"
                        >
                        </v-lazy>
                      </v-responsive>
                    </v-responsive>
                  </v-col>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
    drawer: false,
    group: null,
    login: false,
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "İsim Gerekli",
      (v) => v.length <= 10 || "Kullanıcı adı 15 karakterden az olmalıdır.",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email Gerekli",
      (v) => /.+@.+/.test(v) || "Lütfen geçerli bir mail adresi girin.",
    ],
    snackbar: false,
    text: "Yorum Yapmak İçin Giriş Yapınız",
    timeout: 5000,
    dialog: false,
    dialogg: false,
    isActive: false,
  }),
};
</script>
<style>
#pimg {
  margin-left: 44rem;
  margin-top: 10rem;
}
#img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}
#giris {
  margin-left: 1rem;
}
@media screen and (max-width: 600px) {
  #nomobile {
    visibility: hidden;
    clear: both;
    float: right;
    margin: 5px auto;
    width: 22%;
    height: auto;
    display: none;
  }
}

@media all and (min-width: 480px) {
  #mobil {
    display: none;
  }
}
@media all and (max-width: 479px) {
  #mobil {
    display: block;
  }
}

.avatar-center-heigth {
  position: absolute;
}

.profile-text-name {
  margin-top: 70px;
}

.sutitles {
  margin: 5px;
  padding: 16px;
}
</style>
