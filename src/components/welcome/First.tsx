import { defineComponent } from 'vue';
import s from './WelcomeLayout.module.scss';
import pig from '../../assets/icons/pig.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';
export const First = defineComponent({
  setup: (props, context) => {
    const slots = {
      icon: () => <img src={pig} />,
      title: () => <h2>Earn Smart<br />Save Smart</h2>,
      buttons: () => <>
        <RouterLink class={s.fake} to="/welcome/1">Skip</RouterLink>
        <RouterLink to="/welcome/2">Next</RouterLink>
        <RouterLink to="/welcome/1">Skip</RouterLink>
      </>
    }
    return () => (
      <WelcomeLayout v-slots={slots}></WelcomeLayout>
    )
  }
})
