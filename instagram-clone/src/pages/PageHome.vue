<template>
  <q-page class="constrains q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          class="card-post q-mb-md"
          v-for="post in posts"
          :key="post.id"
          flat
          bordered
        >
          <div class="col-4">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-bold"
                  >Saddam Salokhiddinov
                </q-item-label>
                <q-item-label caption>{{ post.location }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <q-img class="col-5" :src="post.imageUrl" />
          <q-separator />
          <q-card-section>
            <div class="text-caption">{{ post.caption }}</div>
            <div class="text-caption text-grey">
              {{ post.date }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">Saddam Salokhiddinov </q-item-label>
            <q-item-label caption>Software engineer</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { date } from "quasar";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: "Golden Gate Brigde",
          date: 1635287738682,
          location: "Seoul, South Korea",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 2,
          caption: "Golden Gate Brigde",
          date: 1635287738682,
          location: "Seoul, South Korea",
          imageUrl:
            "https://media.istockphoto.com/photos/seoul-downtown-cityscape-with-fortress-and-namsan-seoul-tower-on-picture-id950579008?b=1&k=20&m=950579008&s=170667a&w=0&h=Ka-FcKS6dM33_hf0IkGfykKuRD-rSzwKUadWLqKemck=",
        },
        {
          id: 3,
          caption: "Golden Gate Brigde",
          date: 1635287738682,
          location: "Seoul, South Korea",
          imageUrl:
            "https://media.istockphoto.com/photos/view-of-the-traffic-in-seoul-from-above-picture-id471633244?k=20&m=471633244&s=612x612&w=0&h=O0etQ8xPxXYGD3AR4yc8CAx9_U19B15hIqUhkt1sJgM=",
        },
        {
          id: 4,
          caption: "Golden Gate Brigde",
          date: 1635287738682,
          location: "Seoul, South Korea",
          imageUrl:
            "https://media.istockphoto.com/photos/gyeongbokgung-palace-at-night-in-seoulkorea-picture-id488433476?b=1&k=20&m=488433476&s=170667a&w=0&h=Y3KVZTjygF9xMh4DPdfX5UaLNkqAmWi7Ye3CqOPoPog=",
        },
        {
          id: 5,
          caption: "Beautiful image",
          date: 1635287738682,
          location: "Seoul, South Korea",
          imageUrl:
            "https://media.istockphoto.com/photos/seoul-south-korea-skyline-picture-id521707831?b=1&k=20&m=521707831&s=170667a&w=0&h=IW-PqLm_R4Khy3fS7XO8cnQ8E_pQMW1WHo3tLGpqeeo=",
        },
        {
          id: 6,
          caption: "Beautiful image",
          date: 1635287738682,
          location: "Seoul, South Korea",
          imageUrl:
            "https://images.unsplash.com/photo-1538485399081-7191377e8241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VvdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
    };
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "YYYY-MM-DDTHH:mm:ss.SSSZ");
    },
  },
});
</script>
