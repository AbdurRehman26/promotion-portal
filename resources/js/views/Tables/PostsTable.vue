<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <base-button @click.prevent="showModal" type="primary" size="md"
            >Create</base-button
          >
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="items"
      >
        <template slot="columns">
          <th>Image</th>
          <th>Link</th>
          <th>Approved Status</th>
          <th>Reason</th>
          <th>Audience Count</th>
          <th>Posted Link</th>
          <th></th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">
            <div class="media align-items-center">
              <a target="_blank" v-if="row.imagePath" :href="row.imagePath" class="avatar rounded-circle mr-3">
                <img alt="Image placeholder" :src="row.imagePath" />
              </a>

              <span v-if="!row.imagePath"><center>N/A</center></span>
            </div>
          </th>
          <td class="budget">
              <a v-if="row.link" :href="row.link">{{row.link}}</a>
              <span v-if="!row.link">N/A</span>
          </td>
          <td>

            <badge class="mr-4" type="default">
              <span class="status">{{row.statuType ? row.statusType : 'pending' }}</span>
            </badge>
          </td>
 
          <td>
            {{row.rejection_reason ? row.rejection_reason : 'N/A'}}
          </td>

          <td>
            {{ row.audienceCount.min + ' - ' + row.audienceCount.max }}
          </td>

          <td class="text-left">
            <a v-if="row.posted_link" :href="row.posted_link">{{row.posted_link}}</a>
            <span v-if="!row.posted_link">N/A</span>
          </td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    > 
      <base-pagination :total="pagination.total"></base-pagination>
    </div>
  </div>
</template>
<script>
import Resource from "@/api/resource";
const postResource = new Resource("api/post");

export default {
  name: "projects-table",
  props: {
    reloadList: {
      type: Boolean,
    },
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      pagination: {},
      items: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getData({pagination: true});
  },
  watch:{
    reloadList(){
      this.getData({pagination: true});
    }
  },
  methods: {
    async getData(query) {
      this.items = [];

      const response = await postResource.list(query);

      this.items = response.data;
      this.pagination = response.pagination;

      this.isLoading = false;
    },

    showModal() {
      this.$emit("show-modal");
    },
  },
};
</script>
<style></style>
