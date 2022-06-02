<template>
  <v-app id="inspire">
   <v-footer id="navbar" color="primary lighten-1" padless>
      <!-- FOOTER -->
      <v-row justify="center" class="pa-3" no-gutters>          
        <v-btn to="/" class="pt-3 mr-12" color="white " plain white--text>
          Anasayfa</v-btn
        >
        <v-btn
          to="dunya"
          class="pt-3 mr-12 ml-12"
          color="white "
          plain
          white--text
        >
          DÜNYA GÜNDEMİ</v-btn
        >
        <v-btn
          to="teknoloji"
          class="pt-3 mr-12"
          color="white "
          plain
          text
          white--text
        >
          TEKNOLOJİ HABERLERİ</v-btn
        >
        <v-btn to="about" class="pt-3 mr-12" color="white " plain text white--text>
          Donanımsal Problemler</v-btn
        >
        <v-btn
          to=""
          class="pt-3 mr-12"
          color="white "
          plain
          text
          white--text
        >
          Yazılımsal Problemler</v-btn>

            
        <!-- Profil --> 
     </v-row>
    <!-- <v-avatar v-model="group">
          <img
            id="img"
            v-bind="attrs"
            v-on="on"
            src="https://media-exp1.licdn.com/dms/image/C5603AQEOxir5pIEmsA/profile-displayphoto-shrink_100_100/0/1643647236979?e=1653523200&v=beta&t=ucs7yunodzKdFPKa8GLywopEFuZ2CmcUL6Cr_p2_J7M"
            alt="John"
            class="center"
          />
          <div class="text-center">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-width="200"
              offset-x
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="indigo" dark v-bind="attrs" v-on="on">
                  <img
                    v-bind="attrs"
                    v-on="on"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQEOxir5pIEmsA/profile-displayphoto-shrink_100_100/0/1643647236979?e=1655942400&v=beta&t=EqH8tvX5FZ4yFYdvThmJ5wZIPxQ_SLzR2w8cRyWpZ1M"
                    alt="Boğaç"
                  />
                </v-btn>
              </template>

              <v-card>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <img
                        src="https://media-exp1.licdn.com/dms/image/C5603AQEOxir5pIEmsA/profile-displayphoto-shrink_100_100/0/1643647236979?e=1655942400&v=beta&t=EqH8tvX5FZ4yFYdvThmJ5wZIPxQ_SLzR2w8cRyWpZ1M"
                        alt="John"
                      />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Boğaç Sevin</v-list-item-title>
                      <v-list-item-subtitle> Admin</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn
                        :class="fav ? 'red--text' : ''"
                        icon
                        @click="fav = !fav"
                      >
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                  <v-list nav dense>
                    <v-list-item-group
                      class="white--text"
                      v-model="group"
                      active-class="deep-purple--text white--text"
                    >
                      <v-list-item to="kurslar" two-line>
                        <v-list-item-content>
                          <v-list-item-title>Profil</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Ayarlar</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item to="/" two-line>
                        <v-list-item-content>
                          <v-list-item-title>Çıkış Yap</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-list>
              </v-card>
            </v-menu>
          </div>
        </v-avatar> -->
      <!-- Giriş Yap -->
      <!-- <div class="text-center">
        <v-dialog v-model="dialogg" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain text white--text dark v-bind="attrs" v-on="on">
              GİRİŞ YAP
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="primary text-h5 white--text">
              Giriş Yap
            </v-card-title>

            <v-form v-model="login">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="15"
                      label="Kullanıcı Adı"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="10"
                      label="Şifre"
                      required
                      type="password"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialogg = false">
                Giriş Yap
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
      
       <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain text white--text dark v-bind="attrs" v-on="on">
              Kayıt Ol
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="primary text-h5 white--text">
              Kayıt Ol
            </v-card-title>

            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="15"
                      label="Kullanıcı Adı"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="15"
                      label="Adınız"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="15"
                      label="Soyadınız"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="10"
                      label="Şifre"
                      required
                      type="password"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                Kayıt Ol
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div> --> -->
    </v-footer>
    <v-app-bar-nav-icon id="mobil" @click="drawer = true"></v-app-bar-nav-icon>
    <v-navigation-drawer class="primary" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          class="white--text"
          v-model="group"
          active-class="deep-purple--text white--text"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >One-line item</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <v-row>
      <!-- En GÜncel Konular -->
      <v-col id="nomobile" cols="2">
        <v-responsive
          class="overflow-y-auto"
          min-width="1rem"
          max-height="35rem"
        >
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="mb-6 mt-6 lg:mb-20 max-w-[620px]">
                <h2
                  id="h6"
                  class="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 "
                >
                  En yeni gönderiler
                </h2>
              </div>
            </div>
          </div>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-responsive max-height="250vh" class="text-center pa-2">
            <v-responsive min-height="50vh" min-width="10vh"></v-responsive>

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
      <!-- Post paylaş -->
      <v-col cols="8"> 
    <v-card
      id="card"
    >
      <v-toolbar max-height="3rem"  flat color="primary" dark>
        <v-toolbar-title class="pb-3">Gönderi Paylaş</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-text-field filled label="Başlık"></v-text-field>

        <v-textarea filled label="Probleminiz"></v-textarea>

        <v-divider class="my-2"></v-divider>

        <v-item-group multiple>
          <v-subheader>Konu</v-subheader>
          <v-item v-slot="{ active, toggle }">
            <v-chip
            
              active-class="primary--text"
              :input-value="active"
              @click="toggle"
            >
              Yazılım
            </v-chip>
          </v-item>
          <v-item v-slot="{ active, toggle }">
            <v-chip
              active-class="primary--text"
              :input-value="active"
              @click="toggle"
            >
              Donanım
            </v-chip>
          </v-item>
          <v-item v-slot="{ active, toggle }">
            <v-chip
              active-class="primary--text"
              :input-value="active"
              @click="toggle"
            >
              Bilgisayar
            </v-chip>
          </v-item>
          <v-item v-slot="{ active, toggle }">
            <v-chip
              active-class="primary--text"
              :input-value="active"
              @click="toggle"
            >
              Kod
            </v-chip>
          </v-item>
          <v-item v-slot="{ active, toggle }">
            <v-chip
              active-class="primary--text"
              :input-value="active"
              @click="toggle"
            >
              Bilgisayar Parçası
            </v-chip>
          </v-item>
        </v-item-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" rounded text tile> Gönder </v-btn>
      </v-card-actions>
    </v-card>
      </v-col>
       <v-col id="nomobile" cols="2">
        <v-responsive
          class="overflow-y-auto"
          min-width="1rem"
          max-height="35rem"
        >
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="mb-6 mt-6 lg:mb-20 max-w-[620px]">
                <h2
                  id="h6"
                  class="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 "
                >
                  Popüler Gönderiler
                </h2>
              </div>
            </div>
          </div>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
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
              <v-list-item-title>Three-line item</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-responsive max-height="250vh" class="text-center pa-2">
            <v-responsive min-height="50vh" min-width="10vh"></v-responsive>

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
      
</v-row>  
    <!-- Konu Başlıkları  -->
    <v-row>
      
      <v-col class="" cols="12"  order="1">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="mb-6 mt-6 lg:mb-20 max-w-[620px]">
              <h2
                id="h6"
                class="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 "
              >
                Popüler Gönderiler
              </h2>
            </div>
          </div>
        </div>
        <v-card class="mx-auto" width="1000px">
          <v-card-title>
            <v-img
              id="durum"
              max-width="100px"
              src="https://media-exp1.licdn.com/dms/image/C5603AQEOxir5pIEmsA/profile-displayphoto-shrink_100_100/0/1643647236979?e=1655942400&v=beta&t=EqH8tvX5FZ4yFYdvThmJ5wZIPxQ_SLzR2w8cRyWpZ1M"
            ></v-img>
            <v-text style="margin-left: 15px"
              >Muhsin Boğaç Sevin <br />
              <h6 style="color: grey; float: left">
                25 Mart Cuma 14.42
              </h6></v-text
            >

            <v-text style="float: left"
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              quaerat beatae facere adipisci, eaque perspiciatis repellat vero
              unde consectetur dolorum ullam. Enim, neque natus? Asperiores
              necessitatibus sint unde iste ullam.</v-text
            >

            <br />
            <br />
            <v-btn v-on:click="arttir()" icon color="blue">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            <v-btn class="ma-2" text icon color="red lighten-2">
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn>
            <div class="text-center">
              <v-btn color="primary" rounded text tile @click="snackbar = true">
                Yorum Yap
              </v-btn>

              <v-snackbar v-model="snackbar" :timeout="timeout">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </div>
            <div id="demo"></div>
          </v-card-title>
        </v-card>
        <v-card class="mx-auto mt-12" width="1000px">
          <v-card-title>
            <v-img
              id="durum"
              max-width="100px"
              src="https://media-exp1.licdn.com/dms/image/C5603AQEOxir5pIEmsA/profile-displayphoto-shrink_100_100/0/1643647236979?e=1655942400&v=beta&t=EqH8tvX5FZ4yFYdvThmJ5wZIPxQ_SLzR2w8cRyWpZ1M"
            ></v-img>
            <v-text style="margin-left: 15px"
              >Muhsin Boğaç Sevin <br />
              <h6 style="color: grey; float: left">
                25 Mart Cuma 14.42
              </h6></v-text
            >

            <v-text style="float: left"
              >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              quaerat beatae facere adipisci, eaque perspiciatis repellat vero
              unde consectetur dolorum ullam. Enim, neque natus? Asperiores
              necessitatibus sint unde iste ullam.</v-text
            >

            <br />
            <br />
            <v-btn v-on:click="arttir()" icon color="blue">
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            <v-btn class="ma-2" text icon color="red lighten-2">
              <v-icon>mdi-thumb-down</v-icon>
            </v-btn>
            <div class="text-center">
              <v-btn color="primary" rounded text tile @click="snackbar = true">
                Yorum Yap
              </v-btn>

              <v-snackbar v-model="snackbar" :timeout="timeout">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </div>
            <div id="demo"></div>
          </v-card-title>
        </v-card>
        <br />
        <br />
      </v-col>
    </v-row>
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
#card {
  margin-top:1rem;
  margin-left: 2rem;
  margin-right: 1rem;
}
#avatar{
  float:left;

}
</style>
