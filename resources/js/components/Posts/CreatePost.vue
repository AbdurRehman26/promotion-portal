<template>
  <div>
    <card
      type="secondary"
      shadow
      header-classes="bg-white pb-5"
      body-classes="px-lg-5 py-lg-5"
      class="border-0"
    >
      <div>
        <tabs>
          <tab-pane>
            <span @click.prevent="initializeValues()" slot="title">
              <i class="ni ni-tag" />
              Link
            </span>

            <div class="row">
              <div class="col-md-6">
                <base-input
                  v-model="formData.link"
                  :label="`Link ( Paste only public tweets/posts' links )`"
                  placeholder="https://facebook.com/link"
                ></base-input>
              </div>
            </div>
          </tab-pane>

          <tab-pane>
            <span @click.prevent="initializeValues()" slot="title">
              <i class="ni ni-image" />
              Image
            </span>

            <div class="container ct-example-row">
              <div class="row">
                <div class="col">
                  <upload-file
                    class="form-group"
                    @response="uploadResponse"
                  ></upload-file>
                </div>
                <div class="col">
   
                  <img :src="formData.imagePath" alt="Raised image" class="img-fluid rounded shadow-lg" style="width: 250px;">

                </div>
              </div>
            </div>
          </tab-pane>
        </tabs>

        <div class="row">
          <div class="col-md-6 form-group">
            <label>Audience Count:</label>
            <select
              v-model="formData.audience_count_id"
              class="form-control"
              data-toggle="select"
              data-minimum-results-for-search="Infinity"
            >
              <option v-for="audience in audiences" :value="audience.id"
                >{{ audience.min }} - {{ audience.max }}</option
              >
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <base-button
              class="form-group"
              @click.prevent="submitPost()"
              type="primary"
              size="md"
              >Create</base-button
            >
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import UploadFile from "../Common/UploadFile";

import Resource from "@/api/resource";
const postResource = new Resource("api/post");


export default {
  components: {
    UploadFile,
  },
  /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
  props: ["audiences"], // End of Component > props
  /*
        |--------------------------------------------------------------------------
        | Component > data
        |--------------------------------------------------------------------------
        */
  data() {
    return {
      formData: {
        link: "",
        image: "",
        audience_count_id: 1,
        imagePath: "https://via.placeholder.com/250",
        audience_count_id: 1
      },
    };
  }, // End of Component > data
  /*
        |--------------------------------------------------------------------------
        | Component > computed
        |--------------------------------------------------------------------------
        */
  computed: {}, // End of Component > computed
  /*
        |--------------------------------------------------------------------------
        | Component > methods
        |--------------------------------------------------------------------------
        */
  methods: {
    initializeValues(){
      this.formData = {
          link: "",
          image: "",
          imagePath: ""
      };
    },
    async submitPost(){

     const response = await postResource.store(this.formData);
     this.initializeValues();

    },
    uploadResponse(response) {
      this.formData.image = response.name;
      this.formData.imagePath = response.upload_url;
    },
  }, // End of Component > methods
  /*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
  mounted() {}, // End of Component > mounted
  watch: {},
}; // End of export default
</script>
