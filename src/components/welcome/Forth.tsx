import { defineComponent } from 'vue';
import s from './First.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { RouterLink } from 'vue-router';
export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={cloud} />
          <h2>Cloud Backup<br />Never Lose Data</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
          <RouterLink to="/welcome/1">Finish</RouterLink>
          <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
        </div>
      </div>
    )
  }
})
