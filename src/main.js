import store from "@/store";

import "@/styles/core/fonts.scss";
import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

export default function(Vue, { appOptions }) {
  appOptions.store = store;
}
