<template>
  <div class="col-sm-12">
    <h4>eProposal</h4>
    <b-tabs>
      <b-tab title="Templates" active>
        <h5>eProposal Templates</h5>
        <table class="table table-bordered">
          <draggable :element="'tbody'" :options="{handle: '.handle-parent', group: 'tables'}">
            <template>
              <tr v-for="(item, index) in items">
                <td>
                  <span class="handle-parent">
                    <span class="icon-move"></span>
                  </span>
                </td>
                <td>
                  <toggle-button v-model="item.tbstate"/>
                </td>
                <template>
                  <td>{{item.name}}</td>
                  <td>{{item.qty}}</td>
                </template>
              </tr>
            </template>
          </draggable>
        </table>
      </b-tab>
      <b-tab title="Navigation">
        <br>Navigation
      </b-tab>
      <b-tab title="Domain">
        <br>Domain
      </b-tab>
      <b-tab title="Photo Tour">
        <br>Photo Tour
      </b-tab>
      <b-tab title="Header Images">
        <br>
        <ImageCropper></ImageCropper>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ImageCropper from "../Cropper/Cropper";
import Draggable from "vuedraggable";

export default {
  name: "eproposal",
  components: {
    ImageCropper,
    Draggable
  },
  data() {
    return {
      items: [
        {
          name: "name 1",
          qty: "qty 1",
          rate: "rate 1",
          tbstate: false
        },
        {
          name: "name 2",
          qty: "qty 2",
          rate: "rate 2",
          tbstate: true
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../../Styles/variables.scss";
.tabs {
  .nav-tabs {
    border-bottom: 2px solid $brand-primary;
    .nav-item {
      margin-bottom: -2px;
    }
    .nav-link {
      border-radius: 0;
      &:hover,
      &:focus {
        color: $brand-primary;
        border-color: transparent;
      }
      &.active {
        color: $brand-primary;
        border-top: 2px solid $brand-primary;
        &:hover,
        &:focus {
          color: $brand-primary;
          border-color: $brand-primary #dee2e6 transparent #dee2e6;
        }
      }
    }
  }
}
</style>
