<template>
  <q-page class="constrains q-pa-md">
    <div class="camera-frame q-pa-md">
      <video src="" class="full-width" autoplay playsinline ref="video" />
    </div>
    <div class="text-center q-pa-md">
      <q-btn color="grey-10" size="lg" icon="camera" round></q-btn>
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.caption"
          label="Caption"
          class="col col-sm-6"
          dense
        />
      </div>
    </div>
    <div class="text-center q-pa-md">
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.location"
          label="Location"
          class="col col-sm-6"
          dense
        >
          <template v-slot:append>
            <q-btn round dense flat icon="navigation" />
          </template>
        </q-input>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn color="primary" label="Post image" rounded unelevated />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { uid } from "quasar";

export default defineComponent({
  name: "PageCamera",
  data() {
    return {
      post: {
        id: uid(),
        caption: "",
        location: "",
        photo: null,
        date: Date.now(),
      },
    };
  },
  methods: {
    initCamera() {
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((stream) => {
          this.$refs.video.srcObject = stream;
        });
    },
  },
  mounted() {
    this.initCamera();
  },
});
</script>

<style scoped>
.camera-frame {
  border: 2px solid #a5a5a5;
  border-radius: 20px;
}

.constrains {
  max-width: 600px;
  margin: auto;
}
</style>
