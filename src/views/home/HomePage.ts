import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {

    active = 0;

    tabs = [
        { label: '會話列表', icon: 'iconfont icon-xinxi' },
        { label: '我的', icon: 'iconfont icon-wode' }
    ];

    get tabWidth(){
        const width = (100 / this.tabs.length) + '%';
        return 'width:'+width;
    };

    toggle(i: number){
        this.active = i;
    };

    toConversation(){
        this.$router.push({name: 'conversation'});
    };

}
