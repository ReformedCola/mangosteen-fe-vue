import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import clock from '../../assets/icons/clock.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={clock} />,
          title: () => <h2>Daily Alert<br />Never Miss a Bill</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
            <RouterLink to="/welcome/3">Next</RouterLink>
            <RouterLink to="/welcome/1">Skip</RouterLink>
          </>
        }}
      </WelcomeLayout>
    )
  }
})
