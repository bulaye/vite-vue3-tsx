import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    msg: {
        type: String,
        default: ''
    }
  },

  setup(props, ctx) {
      const click = function() {
          console.log('tsx-style clicked')
      }
    return () => (
      <>
        <div class='tsx-style' onClick={click}>
            tsx-style {msg}
        </div>
      </>
    )
  }
})