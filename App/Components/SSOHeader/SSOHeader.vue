<template>
  <header class="sso-header">
    <div class="container-fluid">
      <b-navbar toggleable="md" type="dark">
        <b-navbar-nav>
          <b-nav-item-dropdown no-caret>
            <template slot="button-content">
              <img
                src="https://uikits.cendyn.com/Areas/v002/Content/images/sso-ddm-blocks.jpg"
                alt="Product Nav Dropdown"
              >
            </template>
            <b-dropdown-item
              :key="product.id"
              v-for="product in ssoProducts"
              :href="product.link"
            >{{product.name}}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-brand>
          <span>
            eProposal
            <sup>&reg;</sup>
          </span>
        </b-navbar-brand>

        <b-nav-form>
          <!-- https://www.npmjs.com/package/vue-search-select -->
          <model-select v-model="item" :options="options" placeholder="Select Property"></model-select>
        </b-nav-form>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown class="utility-nav" right no-caret>
              <template slot="button-content">
                <span class="avatar">{{userFirstInitial}}</span>
                <span class="user">{{userEmailAddress}}</span>
                <span class="icon-chevron-down"></span>
              </template>
              <b-dropdown-item :key="item.id" v-for="item in utilityNavItems">
                <span :class="item.icon"></span>
                <span class="utility-nav--item">{{item.name}}</span>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
import { ModelSelect } from "vue-search-select";

export default {
  name: "SSOHeader",
  components: {
    ModelSelect
  },
  data() {
    return {
      userFirstInitial: "F",
      userEmailAddress: "bfranklin@cendyn.com",
      utilityNavItems: [
        {
          id: 1,
          name: "Language Settings",
          icon: "icon-earth",
          link: "dev.cendyn.com/language"
        },
        {
          id: 2,
          name: "Logout",
          icon: "icon-lock",
          link: "dev.cendyn.com/logout"
        }
      ],
      ssoProducts: [
        {
          id: 1,
          name: "eProposal",
          link: "dev.cendyn.com/eProposal"
        },
        {
          id: 2,
          name: "eMenus",
          link: "dev.cendyn.com/eMenus"
        }
      ],
      options: [
        { value: "1", text: "aa" + " - " + "1" },
        { value: "2", text: "ab" + " - " + "2" },
        { value: "3", text: "bc" + " - " + "3" },
        { value: "4", text: "cd" + " - " + "4" },
        { value: "5", text: "de" + " - " + "5" }
      ],
      item: {
        value: "",
        text: ""
      }
    };
  },
  watch: {
    item: function(selected) {
      console.log(selected.value);
      this.$store.commit("updatePropertySelected", selected);
      let currProp = this.$store.getters.getCurrentPropertySelected;
      console.log(currProp);
      this.$router.push("property");
    }
  },
  methods: {
    reset() {
      this.item = {};
    },
    selectFromParentComponent1() {
      this.item = this.options[0];
    }
  }
};
</script>

<style lang="scss">
@import "../../Styles/variables.scss";
.sso-header {
  background-color: $brand-midnight;
  height: 65px;
  .ui {
    &.fluid {
      &.dropdown {
        background: transparent;
        color: #fff;
        > .dropdown {
          &.icon {
            padding-top: 14px;
            right: 0;
            &::before {
              font-family: "Linearicons";
              content: "\e93a";
            }
          }
        }
        > .default.text {
          color: #fff;
        }
      }
    }
  }
  .navbar {
    background-color: $brand-midnight;
    padding: 0;
    .navbar-brand {
      margin-right: 50px;
      padding-top: 0;
    }
    .navbar-nav {
      .nav-link {
        padding: 0;
        color: #fff;
        display: table;
      }
    }
  }
  .btn {
    border: none;
  }
  .navbar-brand {
    color: #fff;
    padding-left: 25px;
    sup {
      font-size: 0.7em;
      left: -5px;
    }
  }
  .avatar {
    display: table-cell;
    height: 40px;
    width: 40px;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    background: $brand-main;
    color: #fff;
  }
  .user,
  .nav-link > span[class^="icon-"] {
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
  }
  .nav-link > span[class^="icon-"] {
    font-size: 12px;
    padding-top: 2px;
  }
  .utility-nav {
    .dropdown-item {
      color: $brand-text-muted;
      padding: 5px;
      &:hover,
      &:focus {
        color: $brand-text-muted;
        background-color: transparent;
        .utility-nav--item {
          text-decoration: underline;
        }
      }
      .utility-nav--item {
        padding-left: 5px;
      }
    }
    .dropdown-menu {
      right: -14px;
      top: 50px;
      border-radius: 0;
      background-color: $brand-light-smoke;
      border: none;
      padding: 10px;
      &::before {
        left: auto;
        right: 11px;
        position: absolute;
        top: -8px;
        display: inline-block !important;
        border-right: 8px solid transparent;
        border-bottom: 8px solid $brand-light-smoke;
        border-left: 8px solid transparent;
        content: "";
      }
      &::after {
        left: auto;
        right: 12px;
        position: absolute;
        top: -7px;
        display: inline-block !important;
        border-right: 7px solid transparent;
        border-bottom: 7px solid $brand-light-smoke;
        border-left: 7px solid transparent;
        content: "";
      }
    }
  }
}
</style>
