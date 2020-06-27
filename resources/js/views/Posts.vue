<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8"> </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <posts-table
            @show-modal="showModal"
            title="Submitted Posts"
          ></posts-table>
        </div>
      </div>

      <modal
        :show.sync="modals.modal3"
        body-classes="p-0"
        modal-classes="modal-dialog-centered modal-lg"
      >
  
        <create-post :audiences="audiences"></create-post>

      </modal>
    </div>
  </div>
</template>



<script>
import CreatePost from '../components/Posts/CreatePost.vue'
import PostsTable from './Tables/PostsTable.vue'
import Resource from "@/api/resource";
const audienceResource = new Resource("api/audience-count");

export default {
  components: {
    CreatePost,
    PostsTable,
  },
  /*
        |--------------------------------------------------------------------------
        | Component > props
        |--------------------------------------------------------------------------
        */
  props: {}, // End of Component > props
  /*
        |--------------------------------------------------------------------------
        | Component > data
        |--------------------------------------------------------------------------
        */
  data() {
    return {
      modals: {
        modal3: false,
      },
      audiences: [],
      showCreate: false,
      loading: false,
      items: []
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
    showModal() {
      this.modals.modal3 = true;
    },
    async getAudienceData() {
      this.audiences = [];

      const response = await audienceResource.list({
        market_id: this.$route.params.id,
      });

      this.audiences = response.data;

      this.isLoading = false;
    },
  }, // End of Component > methods
  /*
        |--------------------------------------------------------------------------
        | Component > mounted
        |--------------------------------------------------------------------------
        */
  mounted() {
    this.getAudienceData();
  }, // End of Component > mounted
  watch: {},
}; // End of export default
</script>
