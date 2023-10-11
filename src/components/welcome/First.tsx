import { defineComponent } from 'vue';
import s from './First.module.scss';
import pig from '../../assets/icons/pig.svg';
import { RouterLink } from 'vue-router';
export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={pig} />
          <h2>Earn Smart<br />Save Smart</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
          <RouterLink to="/welcome/2">Next</RouterLink>
          <RouterLink to="/welcome/1">Skip</RouterLink>
        </div>
      </div>
    )
  }
})
