import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import cloud from '../../assets/icons/cloud.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={cloud} />,
          title: () => <h2>Cloud Backup<br />Never Lose Data</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
            <RouterLink to="/welcome/1">Finish</RouterLink>
            <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})
