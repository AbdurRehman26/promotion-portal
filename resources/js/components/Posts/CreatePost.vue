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
            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="name@example.com"></base-input>
              </div>
              <div class="col-md-6">
                <base-input placeholder="Disabled" disabled></base-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <base-input
                  placeholder="Birthday"
                  addon-left-icon="ni ni-zoom-split-in"
                ></base-input>
              </div>
              <div class="col-md-6">
                <base-input
                  placeholder="Birthday"
                  addon-right-icon="ni ni-zoom-split-in"
                ></base-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="Success" :valid="true"></base-input>
              </div>
              <div class="col-md-6">
                <base-input
                  placeholder="Error input"
                  :valid="false"
                ></base-input>
              </div>
            </div>
          </div>

        <base-button @click.prevent="showModal" type="primary" size="md">Create</base-button>

        </card>





</div>



</template>