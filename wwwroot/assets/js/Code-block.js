/*global
    piranha
*/

Vue.component("code-block", {
    props: ["uid", "toolbar", "model"],
    methods: {
        onBlur: function (e) {
            this.model.body.value = e.target.innerText;
        }
    },
    computed: {
        isEmpty: function () {
            return piranha.utils.isEmptyText(this.model.body.value);
        }
    },
    template:
        "<div class='block-body' :class='{ empty: isEmpty }'>" +
        " <select v-model='model.language.value' class='form-control'> <option value='csharp'>C#</option><option value='csharp'>CSS</option><option value='xml'>XML</option></select>" +
        "  <pre contenteditable='true' spellcheck='false' v-html='model.body.value' v-on:blur='onBlur'></pre>" +
        "</div>"
});