<template>
  <q-page class="constrains q-pa-md">
    <q-card
      class="card-post"
      v-for="post in posts"
      :key="post.id"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">Saddam Salokhiddinov </q-item-label>
          <q-item-label caption> Seoul, South Korea </q-item-label>
        </q-item-section>
      </q-item>
      <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-separator />
      <q-card-section>
        <div class="text-caption">Golden Gate Bridge</div>
        <div class="text-grey">October 27, 2021</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

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
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 3,
          caption: "Golden Gate Brigde",
          date: 1635287738682,
          location: "Seoul, South Korea",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
        {
          id: 4,
          caption: "Golden Gate Brigde",
          date: 1635287738682,
          location: "Seoul, South Korea",
          imageUrl: "https://cdn.quasar.dev/img/parallax2.jpg",
        },
      ],
    };
  },
});
</script>

  