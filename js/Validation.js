function Validation() {
    this.checkEmpty = function (valueInput, msgErr, spanID) {
        if (valueInput.trim() == "") {
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }

    this.checkName = function (valueInput, msgErr, spanID) {
        var pattern = /^[a-z 0-9 A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    this.checkGia = function (valueInput, msgErr, spanID) {
        var pattern = /^[0-9\\s]+$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }
}