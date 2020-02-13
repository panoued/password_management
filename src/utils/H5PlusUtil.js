export function isSupportFingerprint(){
    if(window.plus && plus.fingerprint) {
		return plus.fingerprint.isSupport() ? true : false;
	}else {
		console.log("plus is not defined");
	};
};

export function isEnrolledFingerprints(){
    if(window.plus && plus.fingerprint) {
		return plus.fingerprint.isEnrolledFingerprints() ? true : false;
	}else {
		console.log("plus is not defined");
	};
};
