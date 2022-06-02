<template>
  <v-app id="inspire">
    <div id="app">
      <!-- Navbar -->

      <v-main>
        <router-view />
      </v-main>
    </div>

    <!-- Footer -->
    <!-- <v-footer dark padless>
      <v-card
        id="footer"
        flat
        tile
        class="primary lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-footer> -->
    <v-navigation-drawer
      plain
      color="primary"
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          color="white"
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item href="1Haber1">
            <v-list-item-title class="white--text">
              <v-link>Logo</v-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="white--text">
              <v-link>Teknoloji Haberleri</v-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item href="/">
            <v-list-item-title class="white--text"
              ><v-link>Dünya Gündemi</v-link></v-list-item-title
            >
          </v-list-item>

          <v-list-item href="/">
            <v-list-item-title class="white--text"
              ><v-link>Yazılımsal Problemler</v-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item href="/">
            <v-list-item-title class="white--text"
              ><v-link>Donanımsal Problemler</v-link></v-list-item-title
            >
          </v-list-item>
          <hr />
          <v-list-item href="/">
            <v-list-item-title class="white--text"
              ><v-link>En Çok Okunanlar</v-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item href="/">
            <v-list-item-title class="white--text"
              ><v-link>En Çok Paylaşılanlar</v-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item href="/">
            <v-list-item-title class="white--text"
              ><v-link>En Çok İzlenenler</v-link></v-list-item-title
            >
          </v-list-item>
          <hr />
          <v-list-item href="/">
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    links: [
      "TEKNOLOJİ HABERLERİ",
      "DÜNYA GÜNDEMİ",
      "YAZILIMSAL PROBLEMLER",
      "DONANIMSAL PROBLEMLER",
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style></style>
