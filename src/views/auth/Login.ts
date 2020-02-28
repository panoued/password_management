import { Component, Vue } from 'vue-property-decorator';
import { onPlusReady, isSupportFingerprint, authenticateFingerprint } from '@/utils/H5PlusUtil';

@Component
export default class Login extends Vue {

    support = false;

    auth = false;

    loading = true;

    loginFlag = false;

    get tips(){
        if(this.loading){
            return '请验证指纹';
        }else if(this.loginFlag){
            return '登录成功';
        }else{
            return '登录失败';
        };
    };

    loginStart(){
        this.auth = true;
        this.loading = true;
        authenticateFingerprint(() => {
            this.loginFlag = true;
            this.loading = false;
        }, () => {
            this.loginFlag = false;
            this.loading = false;
        });
    };

    mounted() {
        onPlusReady(() => {
            this.support = isSupportFingerprint();
        });
    };

}