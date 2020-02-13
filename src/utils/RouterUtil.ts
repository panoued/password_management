import router from '@/router';

enum Animated {
    sir = 'animated slideInRight',
    sor = 'animated slideOutRight',
    sil = 'animated slideInLeft',
    sol = 'animated slideOutLeft',
}

export class RouterUtil {
    
    private static enterAnimated = Animated.sir;

    private static leaveAnimated = Animated.sol;

    static getEnterAnimated(){
        return this.enterAnimated;
    };

    static getLeaveAnimated(){
        return this.leaveAnimated;
    };

    static reSetAnimated(){
        this.enterAnimated = Animated.sir;
        this.leaveAnimated = Animated.sol;
    };

    static setBackAnimated(){
        this.enterAnimated = Animated.sil;
        this.leaveAnimated = Animated.sor;
    };

    static back(step = -1){
        this.setBackAnimated();
        router.go(step);
        setTimeout(() => {
            this.reSetAnimated();
        }, 300);
    };

}
