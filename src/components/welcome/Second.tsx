import { defineComponent } from 'vue';
import s from './First.module.scss';
import clock from '../../assets/icons/clock.svg';
import { RouterLink } from 'vue-router';
export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={clock} />
          <h2>Daily Alert<br />Never Miss a Bill</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
          <RouterLink to="/welcome/3">Next</RouterLink>
          <RouterLink to="/welcome/1">Skip</RouterLink>
        </div>
      </div>
    )
  }
})
