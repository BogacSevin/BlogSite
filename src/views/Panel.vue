<template>
  <v-app>
    <div>
      <v-app-bar id="bar" app color="primary" dark>
        <div>
          <a href="/" class="d-flex align-center">
            <v-img
              alt="Rodos Logo"
              class="shrink mr-2"
              contain
              src="../assets/logo.png"
              transition="scale-transition"
              width="150"
            />
          </a>
        </div>
        <v-spacer></v-spacer>

        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2"></span>
        </v-btn>
        <v-btn
          color="dark"
          elevation="12"
          outlined
          plain
          raised
          rounded
          href="/"
          >Çıkış</v-btn
        >
      </v-app-bar>

      <!-- Kullanıcıya hoşgeldin  -->
      <v-card style="margin-left: 20px" id="burako" color="primary">
        <v-img
          src="https://media-exp1.licdn.com/dms/image/C5603AQEOxir5pIEmsA/profile-displayphoto-shrink_200_200/0/1643647236979?e=1651104000&v=beta&t=ZvIRYrDEBXHb2dT6hXRv7pIpmP7PZ73O78DUhBR2L2I"
          height="200px"
        ></v-img>
        <v-btn
          href="/Profil"
          color="primary
        "
          class="mt-4 mr-4"
          style="float: right"
          >Profil</v-btn
        >
        <v-card-title style="color: white"> Hoşgeldin Boğaç </v-card-title>
      </v-card>
      <!-- İstatistikler  -->
      <v-card
        style="padding-top: 40px; padding-left: 110px"
        id="istatic"
        color="primary"
      >
        <!-- öğrenci  -->
        <div style="float: left">
          <v-img
            id="image"
            src="https://img.icons8.com/dotty/344/gender-neutral-user.png"
          >
          </v-img>
          <v-btn
            class="primary"
            style="margin-left: 80px"
            absolute
            href="/about"
          >
            9731 Öğrenci
          </v-btn>
        </div>
        <!-- satış  -->
        <div style="float: left">
          <v-img
            id="image1"
            src="https://cdn-icons-png.flaticon.com/512/639/639365.png"
          >
          </v-img>
          <div class="text-center ma-2">
            <v-btn
              style="margin-left: 310px"
              color="primary"
              @click="snackbar = true"
            >
              213 Satış
            </v-btn>
            <v-snackbar v-model="snackbar">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </div>
        <div style="float: left">
          <v-img
            id="image1"
            src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
          >
          </v-img>
          <v-btn href="/kurslar" class="primary" style="margin-left: 320px">
            172 Kurs
          </v-btn>
        </div>

        <!-- satış  -->
      </v-card>
      <!-- ayarlar -->
      <v-card id="card" color="primary">
        <v-img
          src="https://optimumgsm.com/images/slider/3997668966118-486-ayarlar.png"
        >
        </v-img>
        <div class="col-6" id="icons">
          <v-btn class="ma-2" color="primary" dark> Ayarlar </v-btn>
        </div>
      </v-card>
      <!-- mesajlar-->
      <v-card id="card" color="primary">
        <v-img src="https://img.icons8.com/color/344/apple-mail.png"> </v-img>
        <div id="icon">
          <v-row justify="center">
            <v-dialog v-model="dialog" width="450px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-8"
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Mesajlar
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5"></span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row justify="space-around">
                      <v-card width="450">
                        <v-img
                          height="200px"
                          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                        >
                          <v-app-bar flat color="rgba(0, 0, 0, 0)">
                            <v-app-bar-nav-icon
                              color="white"
                            ></v-app-bar-nav-icon>

                            <v-toolbar-title class="text-h6 white--text pl-0">
                              Messages
                            </v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn color="white" icon>
                              <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                          </v-app-bar>

                          <v-card-title class="white--text mt-8">
                            <v-avatar size="56">
                              <img
                                alt="user"
                                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                              />
                            </v-avatar>
                            <p class="ml-3">John Doe</p>
                          </v-card-title>
                        </v-img>

                        <v-card-text>
                          <div class="font-weight-bold ml-8 mb-2">Today</div>

                          <v-timeline align-top dense>
                            <v-timeline-item
                              v-for="message in messages"
                              :key="message.time"
                              :color="message.color"
                              small
                            >
                              <div>
                                <div class="font-weight-normal">
                                  <strong>{{ message.from }}</strong> @{{
                                    message.time
                                  }}
                                </div>
                                <div>{{ message.message }}</div>
                              </div>
                            </v-timeline-item>
                          </v-timeline>
                        </v-card-text>
                      </v-card>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
      </v-card>
      <div>
        <!-- veri tablosu-->
        <v-card id="card4" color="primary">
          <div id="app">
            <v-app id="inspire">
              <div>
                <v-sheet tile height="54" class="d-flex">
                  <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-select
                    v-model="type"
                    :items="types"
                    dense
                    outlined
                    hide-details
                    class="ma-2"
                    label="type"
                  ></v-select>
                  <v-select
                    v-model="mode"
                    :items="modes"
                    dense
                    outlined
                    hide-details
                    label="event-overlap-mode"
                    class="ma-2"
                  ></v-select>
                  <v-select
                    v-model="weekday"
                    :items="weekdays"
                    dense
                    outlined
                    hide-details
                    label="weekdays"
                    class="ma-2"
                  ></v-select>
                  <v-spacer></v-spacer>
                  <v-btn icon class="ma-2" @click="$refs.calendar.next()">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-sheet>
                <v-sheet height="600">
                  <v-calendar
                    ref="calendar"
                    v-model="value"
                    :weekdays="weekday"
                    :type="type"
                    :events="events"
                    :event-overlap-mode="mode"
                    :event-overlap-threshold="30"
                    :event-color="getEventColor"
                    @change="getEvents"
                  ></v-calendar>
                </v-sheet>
              </div>
            </v-app>
          </div>
        </v-card>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    return: {
      dialog: false,
    },
    snackbar: false,
    text: `Bakım aşamasında.`,
    type: "month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
    ],
    value: "",
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    messages: [
      {
        from: "Cihat Şengün",
        message: `O hareketi yanlış yapıyorsun kardeşim.`,
        time: "10:42am",
        color: "blue lighten-1",
      },
      {
        from: "Ahmet",
        message: "aaaaaaaaaaaa",
        time: "10:37am",
        color: "green",
      },
      {
        from: "Boğaç",
        message: "bbbbbbbb",
        time: "9:47am",
        color: "deep-purple lighten-1",
      },
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),
  methods: {
    getEvents({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>
<style>
#image {
  width: 100px;
  height: 100px;
  margin-left: 100px;
}
#image1 {
  width: 100px;
  height: 100px;
  margin-left: 320px;
}
#image2 {
  width: 100px;
  height: 100px;
  margin-left: 520px;
}
#icon {
  text-align: center;
}
#icons {
  padding-left: 40px;
}
#card {
  padding-top: 110px;
  height: 650px;
  width: 200px;
  position: relative;
  float: left;
  margin-left: 20px;
  margin-top: 10px;
}

#card2 {
  height: 270px;
  width: 420px;
  position: relative;
  float: top;
  margin-left: 20px;
  margin-top: 10px;
}
#card4 {
  height: 500px;
  width: 1440px;
  position: relative;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
#burako {
  margin-top: 10px;
  height: 270px;
  width: 420px;
  float: left;
  position: relative;
}
#img {
  width: 200px;
  margin-left: 120px;
}
#btn2 {
  text-align: center;
}
#istatic {
  margin-left: 450px;
  width: 1450px;
  height: 270px;
  margin-top: 10px;
}
</style>
