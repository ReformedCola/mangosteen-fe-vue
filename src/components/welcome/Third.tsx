import { defineComponent } from 'vue';
import s from './First.module.scss';
import chart from '../../assets/icons/chart.svg';
import { RouterLink } from 'vue-router';
export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={chart} />
          <h2>Data Visualized<br />Clear Spendings & Earnings</h2>
        </div>
        <div class={s.actions}>
          <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
          <RouterLink to="/welcome/4">Next</RouterLink>
          <RouterLink to="/welcome/1">Skip</RouterLink>
        </div>
      </div>
    )
  }
})
