export function onPlusReady(callback){
    if (window.plus) {
		console.log("window.plus plusReady");
		if (callback) {
			callback();
		};
	} else {
		console.log("document.addEventListener plusReady");
		document.addEventListener('plusready', callback, false);
	};
};

/* 指纹 */
export function isSupportFingerprint(){
    const fp = plus.fingerprint;
    let flag = false;
    if(fp && fp.isSupport() && fp.isEnrolledFingerprints()){
        flag = true;
    };
    return flag;
};

export function authenticateFingerprint(successCB, errorCB){
    plus.fingerprint.authenticate(successCB, errorCB);
};

export function cancelFingerprint(){
    plus.fingerprint.cancel();
};

/* 路径 */
export function convertLocalFileSystemURL(path){
    return plus.io.convertLocalFileSystemURL(path);
};

export function convertAbsoluteFileSystem(path){
    return plus.io.convertAbsoluteFileSystem(path);
};

const infoPath = '/storage/emulated/0/test/info.txt';

/* 文件 */
export function getInfoJson(callback){
    plus.io.resolveLocalFileSystemURL(infoPath, entry => {
        entry.file(file => {
			let fileReader = new plus.io.FileReader();
			fileReader.readAsText(file, 'utf-8');
			fileReader.onloadend = evt => {
                const res = evt.target.result ? JSON.parse(evt.target.result) : evt.target.result;
				callback(res);
			};
		});
    }, () => {
        console.log('获取文件失败');
    });
};

export function setInfoJson(data,callback){
    plus.io.resolveLocalFileSystemURL(infoPath, entry => {
        entry.createWriter(writer => {
            writer.onwrite = e => {
                callback(e);
            };
            writer.onerror = e => {
                console.log('setInfoJson error');
            };
            writer.write(JSON.stringify({time: new Date().valueOf(),list: data}));
        }, error => {
            console.log(error.message);
        });
    }, () => {
        console.log('获取文件失败');
    });
};

export function getFile(callback){
    plus.io.requestFileSystem(plus.io.PRIVATE_WWW, fs => {
		fs.root.getFile(infoPath, { create: true }, () => {
            if(callback && typeof callback == 'function'){
                callback();
            };
		}, error => {
            console.log('getFile error'+JSON.stringify(error));
        });
	}, err => {
        console.log('requestFileSystem error'+JSON.stringify(err));
    });
};
