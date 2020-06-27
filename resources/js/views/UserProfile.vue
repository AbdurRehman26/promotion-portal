<template>
    <div>
        <base-header
            class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
            :style="'min-height: 200px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;'"
        >
            <!-- Mask -->
            <!-- Header container -->
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                    <div class="card card-profile shadow">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img
                                            :src="user.image"
                                            class="rounded-circle"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-0 pt-md-4">
                            <div class="text-center">
                                <div class="h5 font-weight-300">
                                    <i class="ni location_pin mr-2"></i
                                    >
                                </div>
                                <div class="h5 mt-4">
                                    <i class="ni business_briefcase-24 mr-2"></i
                                    >{{user.first_name}}
                                </div>
                                <div>
                                    <i class="ni education_hat mr-2"></i
                                    >{{user.email}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">My account</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">
                                    User information
                                </h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <base-input
                                                disabled
                                                alternative=""
                                                label="Full Name"
                                                placeholder="Full Name"
                                                input-classes="form-control-alternative"
                                                v-model="user.first_name"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <base-input
                                                disabled
                                                alternative=""
                                                label="Email address"
                                                placeholder="jesse@example.com"
                                                input-classes="form-control-alternative"
                                                v-model="user.email"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["user"]),
    },

    name: "user-profile",
    data() {
        return {
            model: {
                username: "",
                email: "",
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                country: "",
                zipCode: "",
                about: "",
            },
        };
    },
};
</script>
<style></style>
