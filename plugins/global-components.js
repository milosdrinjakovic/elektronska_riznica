import Vue from 'vue'
import ZPage from '~/components/layouts/page'
import ZImage from '~/components/global/image'
import ZCard from '~/components/global/card'

Vue.component('z-page', ZPage);
Vue.component('z-image', ZImage);
Vue.component('z-card', ZCard);

import convert from "cyrillic-to-latin";

Vue.mixin({
    methods: {
        translation(item, property) {
            return this.conv(this.getLang(item.langs)[property])
        },
        getLang(languages) {
            const langs = (languages || []);
            if (langs) {
                return langs.find(lang => {
                    if (!lang.lang) return lang
                    return lang.lang.lang_code === this.$i18n.locale
                }) || langs[0];
            }
        },
        conv(val) {
            return this.$i18n.locale === 'sr' ? val : convert(val)
        }
    },
});
