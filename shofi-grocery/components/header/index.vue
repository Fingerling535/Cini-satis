<template>
  <header>
    <div id="header-sticky" :class="`tp-header-area p-relative tp-header-sticky tp-header-height ${isSticky ? 'header-sticky' : ''}`">
      <div class="tp-header-5 pl-25 pr-25" style="background-color: #678E61">
          <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-xxl-2 col-xl-3 col-6">
                  <div class="tp-header-left-5 d-flex align-items-center">
                      <div class="tp-header-hamburger-5 mr-15 d-none d-lg-block">
                        <button @click="handleActive" class="tp-hamburger-btn-2 tp-hamburger-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                      </div>
                      <div class="tp-header-hamburger-5 mr-15 d-lg-none">
                        <button @click="utilityStore.handleOpenMobileMenu()" class="tp-hamburger-btn-2 tp-offcanvas-open-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                      </div>
                      <div class="logo">
                        <nuxt-link href="/">
                          <img src="/images/logo/logo-white.svg" alt="logo">
                        </nuxt-link>
                      </div>
                  </div>
                  <!-- category start -->
                  <header-top-categories :is-active="isActive"></header-top-categories>                
                  <!-- category end -->
                </div>
                <div class="col-xxl-4 col-xl-6 d-none d-xl-block">
                  <div class="main-menu">
                    <nav class="tp-main-menu-content">
                      <!-- menus start -->
                      <header-menus />
                      <!-- menus end -->
                    </nav>
                  </div>
                </div>
                <div class="col-xxl-4 d-none d-xxl-block">
                  <div class="tp-header-search-5">
                      <form @submit.prevent="handleSubmit">
                        <div class="tp-header-search-input-box-5">
                            <div class="tp-header-search-input-5">
                              <input type="text" placeholder="Search for products keywords ..." v-model="searchText">
                              <span class="tp-header-search-icon-5">
                                  <svg-search-2></svg-search-2>
                              </span>
                            </div>
                            <button type="submit">Search</button>
                        </div>
                      </form>
                  </div>
                </div>
                <div class="col-xxl-2 col-xl-3 col-6">
                  <div class="tp-header-right-5 d-flex align-items-center justify-content-end">
                      <div class="tp-header-login-5 d-none d-md-block">
                        <nuxt-link href="/profile" class="d-flex align-items-center">
                            <div class="tp-header-login-icon-5">
                              <span>
                                  <svg-user></svg-user>
                              </span>
                            </div>
                            <div class="tp-header-login-content-5">
                              <p><span>Hello</span> <br> Register</p>
                            </div>
                        </nuxt-link>
                      </div>
                      <div class="tp-header-action-5 d-flex align-items-center ml-20">
                        <div class="tp-header-action-item-5 d-none d-sm-block">
                            <nuxt-link href="/wishlist">
                              <svg-wishlist></svg-wishlist>
                              <span class="tp-header-action-badge-5">{{ wishlistStore.wishlists.length }}</span>
                            </nuxt-link>
                        </div>
                        <div class="tp-header-action-item-5">
                            <button @click="cartStore.handleCartOffcanvas" type="button" class="cartmini-open-btn">
                              <svg-cart-bag></svg-cart-bag>
                              <span class="tp-header-action-badge-5">{{ cartStore.totalPriceQuantity.quantity }}</span>
                            </button>
                        </div>
                        <div class="tp-header-action-item-5 d-none d-sm-block d-xxl-none">
                            <button type="button" @click="utilityStore.handleOpenSearchBar()">
                              <svg-search-2></svg-search-2>
                            </button>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </div>

    </div>
  </header>

  <!-- cart offcanvas start -->
  <offcanvas-cart-sidebar/>
  <!-- cart offcanvas end -->

  <!-- search start -->
  <header-search></header-search>
  <!-- search end -->

  <!-- cart offcanvas start -->
  <offcanvas-mobile-sidebar></offcanvas-mobile-sidebar>
  <!-- cart offcanvas end -->
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
import { useWishlistStore } from '@/pinia/useWishlistStore';
import { useUtilityStore} from '@/pinia/useUtilityStore';

const {isSticky} = useSticky();
const router = useRouter();
const route = useRoute();


let isActive = ref<boolean>(false);
let searchText = ref<string>('');
// handle active
const handleActive = () => isActive.value = !isActive.value;

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const utilityStore = useUtilityStore();

// handle Submit
const handleSubmit = () => {
  if(searchText.value){
    router.push(`/search?searchText=${searchText.value}`)
  }
  else{
    router.push(`/search`)
  }
}

watch(() => route.path, () => {
  isActive.value = false;
})
</script>
