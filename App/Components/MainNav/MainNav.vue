<template>
  <div class="mainnav-wrapper container-fluid">
    <b-nav pills>
      <b-nav-item to="eproposal">eProposal</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "MainNav"
};
</script>

<style lang="scss">
@import "../../Styles/variables.scss";

.mainnav-wrapper {
  background-color: $brand-smoke;
  margin-bottom: 30px;
}

.mainnav-wrapper {
  .nav {
    height: 50px;
    align-items: center;

    &.nav-pills {
      .nav-item {
        margin: 0 5px;
        &:first-child {
          margin-left: 0;
        }
      }

      .nav-link {
        border-radius: 25px;
        padding: 2px 20px;
        color: #fff;

        &.active,
        &:hover {
          background-color: $brand-primary;
        }
      }
    }
  }
}
</style>
