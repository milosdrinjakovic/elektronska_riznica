<template>
  <div class="mt-5">
    <v-row class="mx-0 py-3" style="align-items: center;border-top: 1px solid#ccc;border-bottom: 1px solid#ccc" :no-gutters="$device.isMobileOrTablet" >
      <p class="mr-3 mb-0 body-2">{{$t('layout.share')}}:</p>
      <ShareNetwork network="facebook" :url="url" :title="title">
        <div class="social-box">
          <facebook-icon color="#0C4076" size="16px"></facebook-icon>
        </div>
      </ShareNetwork>
      <ShareNetwork class="mx-2" network="pinterest" :url="url" :title="title">
        <div class="social-box">
          <pinterest-icon color="#c8232c" size="16px"></pinterest-icon>
        </div>
      </ShareNetwork>
      <ShareNetwork network="twitter" :url="url" :title="title">
        <div class="social-box">
          <twitter-icon color="#1DA1F2" size="16px"></twitter-icon>
        </div>
      </ShareNetwork>
    </v-row>
  </div>
</template>

<script>
import facebookIcon from "~/components/icons/facebook";
import pinterestIcon from "~/components/icons/pinterest";
import twitterIcon from "~/components/icons/twitter";

export default {
  components: {
    facebookIcon,
    pinterestIcon,
    twitterIcon
  },
  computed: {
    url() {
      return process.env.domain + this.$route.fullPath
    },
    title() {
      return process.browser ? document.title : '';
    }
  }
}
</script>

<style>
.social-box {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer
}
</style>
