import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld'
import './App.css'
import { reactive, ref } from "vue"
import logo from './assets/logo.png'
import Sfc from './components/sfc-style.vue'
export default defineComponent({
  props: {
  },
  data() {
    return {
    }
  },
  setup(props, ctx) {
    const msg = ref('msg from app');
    const click = function(num: Number): void {
      console.log(num)
    }
    return () => (
      <>
        <img alt="Vue logo" src={logo} onClick={() => click(1)}/>
        <HelloWorld msg={msg.value} onClick={click}/>
        <Sfc msg={msg.value} onClick={click}></Sfc>
        <Sfc onClick={click}></Sfc>

        <router-view></router-view>
      </>
    )
  }
})