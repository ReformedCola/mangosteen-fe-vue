import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import chart from '../../assets/icons/chart.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
export const Third = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={chart} />,
          title: () => <h2>Data Visualized<br />Clear Spendings & Earnings</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
            <RouterLink to="/welcome/4">Next</RouterLink>
            <RouterLink to="/welcome/1">Skip</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})
