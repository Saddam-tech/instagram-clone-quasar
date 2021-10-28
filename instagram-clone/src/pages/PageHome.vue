<template>
  <q-page class="constrains q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <template v-if="!loadingPosts && posts.length">
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
                {{ post.date || niceDate }}
              </div>
            </q-card-section>
          </q-card>
        </template>
        <template v-else>
          <q-card flat bordered>
            <q-item>
              <q-item-section avatar>
                <q-skeleton type="QAvatar" animation="fade" />
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <q-skeleton type="text" animation="fade" />
                </q-item-label>
                <q-item-label caption>
                  <q-skeleton type="text" animation="fade" />
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-skeleton height="200px" square animation="fade" />

            <q-card-section>
              <q-skeleton type="text" class="text-subtitle2" animation="fade" />
              <q-skeleton
                type="text"
                width="50%"
                class="text-subtitle2"
                animation="fade"
              />
            </q-card-section>
          </q-card>
        </template>
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
      posts: [],
      loadingPosts: false,
    };
  },
  methods: {
    getPosts() {
      this.loadingPosts = true;
      this.$axios
        .get("http://localhost:3000/posts")
        .then((response) => {
          this.posts = response.data;
          this.loadingPosts = false;
        })
        .catch((err) => {
          // alert(err.message);
          this.$q.dialog({
            title: "Error",
            message: "Could not download posts.",
          });
          this.loadingPosts = false;
        });
    },
  },
  created() {
    this.getPosts();
  },
  filters: {
    niceDate(value) {
      return new Date(value, "YYYY-MM-DDTHH:mm:ss.SSSZ");
    },
  },
});
</script>
