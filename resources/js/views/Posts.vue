<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8"> </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col">
          <posts-table
            @show-modal="showModal"
            title="Light Table"
          ></posts-table>
        </div>
      </div>

      <modal
        :show.sync="modals.modal3"
        body-classes="p-0"
        modal-classes="modal-dialog-centered modal-lg"
      >

        <create-post></create-post>

      </modal>
    </div>
  </div>
</template>
<script>
import PostsTable from "./Tables/PostsTable";
import CreatePost from "../components/Posts/CreatePost";
export default {
  methods: {
    showModal() {
      this.modals.modal3 = true;
    },
  },
  data() {
    return {
      modals: {
        modal3: false,
      },
    };
  },
  name: "tables",
  components: {
    CreatePost,
    PostsTable,
  },
};
</script>
<style></style>
