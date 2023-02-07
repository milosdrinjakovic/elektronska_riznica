export default {
    computed: {
        breadcrumbs() {
            let items = [{
                disabled: false,
                text: this.$t('layout.home'),
                to: {name: 'index'}
            }];
            if (this.item.parent) {
                items.push({
                    text:  this.translation(this.item.parent, 'name'),
                    to: {
                        name: 'kategorije-id-seo',
                        params: {
                            id: this.item.parent.id,
                            seo: this.getLang(this.item.parent.langs).seo_url || '-'
                        }
                    }
                })
            }
            items.push({
                text: this.conv(this.getLang(this.item.langs).name),
                active: true
            });
            return items;
        },
    }
}