import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => <>
      <header>Nav
        <ul>
          <li>
            <router-link to="/">Foo</router-link>
          </li>
          <li>
            <router-link to="/bar">Bar</router-link>
          </li>
        </ul>
      </header>
      <div>
        <RouterView/>
      </div>
      <footer>Footer</footer>
    </>
  }
})
