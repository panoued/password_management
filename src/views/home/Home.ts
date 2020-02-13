import { Component, Vue, Watch } from 'vue-property-decorator';
import { RouterUtil } from '@/utils/RouterUtil';

@Component
export default class Home extends Vue {

    enter = '';
    leave = ''

    @Watch('$route')
    onRouteChange(){
        this.enter = RouterUtil.getEnterAnimated();
        this.leave = RouterUtil.getLeaveAnimated();
    };

}
