<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked='isSelectAll'
                    class="check-button"
                    @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price">合计：{{totalPrice}}</div>
    <div class="calculate">去计算({{checkLength}})</div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartBottomBar',
  components: { CheckButton },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice () {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => { return preValue + item.price * item.count }, 0).toFixed(2)
    },
    checkLength () {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll () {
      if (this.cartList.length === 0) return false
      // return !(this.cartList.filter(item => !item.checked).length)
      return !this.cartList.find(item => !item.checked)
      // for (const item of this.cartList) {
      //   if (!item.checked) {
      //     return false
      //   }
      // }
      // return true
    }
  },
  methods: {
    checkClick () {
      if (this.isSelectAll) {
        this.cartList.forEach(item => { return item.checked === false })
      } else {
        this.cartList.forEach(item => { return item.checked === true })
      }
    },
    calcClick () {
      if (!this.isSelectAll()) {
        this.$toast.show('请选择购买的商品', 1500)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
    display: flex;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
    font-size: 14px;
  }
  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price {
    margin-left: 20px;
    flex: 1;
  }
  .calculate {
    width: 90px;
    background: red;
    color: white;
    text-align: center;
  }

</style>
