import { Component, Vue } from 'vue-property-decorator';
import { getInfoJson, setInfoJson, getFile, convertAbsoluteFileSystem, onPlusReady } from '@/utils/H5PlusUtil';

@Component
export default class Login extends Vue {

    rootPath = '/storage/emulated/0';

    list: any[] = [];

    get(){
        getInfoJson(res => {
            if(res && res.list){
                console.log(res.time);
                console.log(new Date(res.time));
                console.log(new Date(res.time).toLocaleDateString());
                this.list = res.list;
            }else{
                console.log('res: '+res);
            };
        });
    };

    set(){
        const data = [1,2,3,4,5,6,7,8,9];
        setInfoJson(data,() => {
            console.log('save success');
        });
    };

    mounted() {
        onPlusReady(getFile)  
    };

}