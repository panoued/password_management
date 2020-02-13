import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Blank extends Vue {

    created() {
        this.$router.push({name: 'login'});
    };

}
