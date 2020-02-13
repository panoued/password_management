import { Component, Vue } from 'vue-property-decorator';
import { isSupportFingerprint, isEnrolledFingerprints } from '@/utils/H5PlusUtil';

@Component
export default class Login extends Vue {
    
    mounted() {
        setTimeout(() => {
            console.log(isSupportFingerprint());
            console.log(isEnrolledFingerprints());
        }, 1000);
    };

}