import commonService from "@/services/common";

export const strict = false;

export const state = () => ({
    menu: [],
    drawer: false
})

export const mutations = {
    setMenu(state, value) {
        state.menu = value
    },
    setDrawer(state, value) {
        state.drawer = value
    },
}

export const actions = {
    getMenu({commit, state}, axios) {
        if (!state.menu.length) {
            return commonService.menu(axios)
                .then(response => {
                    (response.data.menu_items || []).forEach(item => {
                        item.displayChild = false;
                        (response.data.menu_items.filter(i => i.parent_id === item.id) || [])
                            .forEach(i => {
                                item.displayChild = false;
                                item.children = item.children || [];
                                item.children.push(i);
                            })
                    });
                    (response.data.menu_items || []).forEach(item => {
                        (item.children || []).forEach(children => {
                            if (children.children) children.model = true;
                        })
                    })
                    commit('setMenu', response.data.menu_items.filter(item => !item.parent_id))
                })
        } else {
            return Promise.resolve(state.items);
        }
    }
}