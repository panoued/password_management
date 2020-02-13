import { Component, Vue } from 'vue-property-decorator';
import { RouterUtil } from '@/utils/RouterUtil';

@Component
export default class Conversation extends Vue {

    name = '联发大厦809';

    value = '';

    list = [
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
        {message: '这是一条别人发送过来测试信息...', key: 1},
        {message: '这是一条我的测试信息...', key: 2},
    ]

    back(){
        RouterUtil.back();
    };

    focus(){
        setTimeout(() => {
            this.scrollToMax();
        }, 300);
    };

    createMessage(key: 1 | 2,message: string){
        return {message: message, key: key}
    };

    scrollToMax(){
        this.$nextTick(() => {
            const body = document.getElementById('conversation-body');
            body.scrollTop = body.scrollHeight;
        });
    };

    getFocus(){
        const input = document.getElementById('conversation-input');
        input.focus();
    };

    send(){
        if(!this.value){
            alert('消息为能为空');
            return;
        };
        const message = this.createMessage(2,this.value);
        this.list.push(message);
        this.value = '';
        this.getFocus();
        this.scrollToMax();

    };

    mounted(){
        this.scrollToMax();
    };

}
