var dsProduct = new ProductList();
const validation = new Validation();

function layDanhSachSanPham() {
    var promise = dsProduct.layDanhSachSP();

    promise.then(function (result) {
        hienThiTable(result.data);
        // console.log(result.data);
    })
    promise.catch(function (error) {
        console.log(error);
    })
}
layDanhSachSanPham();



function hienThiTable(mangSP) {
    var content = "";
    var count = 1;
    mangSP.map(function (sp) {
        content += `<tr>
        <td>${count++}</td>
        <td>${sp.name}</td>
        <td>${sp.price}</td>
        <td>${sp.screen}</td>
        <td>${sp.img}</td>
        <td>${sp.desc}</td>
        <td>${sp.type}</td>
        <td>
        <button class="btn btn-danger" onclick="xoaSanPham('${sp.id}')">Xóa</button>
        <button class="btn btn-success" onclick="xemChiTiet('${sp.id}')">Xem</button>
        </td>
        </tr>`;
    })
    document.getElementById('tblDanhSachSP').innerHTML = content;
}



function themSanPham() {
    // console.log("hàm thêm sp");
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var screen = document.getElementById('screen').value;
    var backCamera = document.getElementById('backCamera').value;
    var frontCamera = document.getElementById('frontCamera').value;
    var img = document.getElementById('img').value;
    var desc = document.getElementById('desc').value;
    var type = document.getElementById('type').value;
    var spNew = new Products(name, price, screen, backCamera, frontCamera, img, desc, type);

    // console.log(spNew);
    name = name.replace(/\s/g, "");

    var isValid = true;
    // console.log(isValid);
    isValid &= validation.checkEmpty(name, "tên sản phẩm không được để trống", "tenSP") && validation.checkName(name, "tên sản phẩm không đúng định dạng", "tenSP");
    isValid &= validation.checkEmpty(price, "Giá sản phẩm không được để trống", "spanPrice") && validation.checkGia(price, "Giá SP không đúng định dạng", "spanPrice");
    isValid &= validation.checkEmpty(screen, "vui lòng nhập đầy đủ thông tin sản phẩm", "spanScreen");
    isValid &= validation.checkEmpty(backCamera, "vui lòng nhập đầy đủ thông tin sản phẩm", "spanBackCamera");
    isValid &= validation.checkEmpty(frontCamera, "vui lòng nhập đầy đủ thông tin sản phẩm", "spanFrontCamera");
    isValid &= validation.checkEmpty(img, "vui lòng nhập link hình ảnh", "spanIMG");
    isValid &= validation.checkEmpty(type, "Hãy nhập loại sản phẩm", "spanType") && validation.checkName(type, "tên sản phẩm không đúng định dạng", "spanType");
    
    if (isValid) {
        // hienThiTable(mangSP);    
        dsProduct.themSP(spNew)
        .then(function (result) {
            document.getElementById('name').value = "";
            document.getElementById('price').value = "";
            document.getElementById('screen').value = "";
            document.getElementById('img').value = "";
            document.getElementById('desc').value = "";
            document.getElementById('type').value = "";
            document.querySelector("#myModal .close").click();
            layDanhSachSanPham();
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

function xoaSanPham(id) {
    dsProduct.xoaSP(id)
        .then(function (result) {
            layDanhSachSanPham();
        })
        .catch(function (error) {
            console.log(error);
        })
}

function xemChiTiet(id) {
    dsProduct.xemSP(id)
        .then(function (result) {
            // console.log(result.data);
            document.getElementById('name').value = result.data.name;
            document.getElementById('price').value = result.data.price;
            document.getElementById('screen').value = result.data.screen;
            document.getElementById('backCamera').value = result.data.backCamera;
            document.getElementById('frontCamera').value = result.data.frontCamera;
            document.getElementById('img').value = result.data.img;
            document.getElementById('desc').value = result.data.desc;
            document.getElementById('type').value = result.data.type;


            document.querySelector("#btnThemSP").click();
            document.querySelector(".btnCapNhat").innerHTML = `<button class="btn btn-primary" onclick="capNhatSanPham(${id})">Cập Nhật</button>`
        })
        .catch(function (error) {
            console.log(error);
        })
}

function capNhatSanPham(id) {
    // lấy data mới của sp
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var screen = document.getElementById('screen').value;
    var backCamera = document.getElementById('backCamera').value;
    var frontCamera = document.getElementById('frontCamera').value;
    var img = document.getElementById('img').value;
    var desc = document.getElementById('desc').value;
    var type = document.getElementById('type').value;
    var newData = new Products(name, price, screen, backCamera, frontCamera, img, desc, type);
    // console.log(newData);
    name = name.replace(/\s/g, "");

    var isValid = true;
    // console.log(isValid);
    isValid &= validation.checkEmpty(name, "tên sản phẩm không được để trống", "tenSP") && validation.checkName(name, "tên sản phẩm không đúng định dạng", "tenSP");
    isValid &= validation.checkEmpty(price, "Giá sản phẩm không được để trống", "spanPrice") && validation.checkGia(price, "Giá SP không đúng định dạng", "spanPrice");
    isValid &= validation.checkEmpty(screen, "vui lòng nhập đầy đủ thông tin sản phẩm", "spanScreen");
    isValid &= validation.checkEmpty(backCamera, "vui lòng nhập đầy đủ thông tin sản phẩm", "spanBackCamera");
    isValid &= validation.checkEmpty(frontCamera, "vui lòng nhập đầy đủ thông tin sản phẩm", "spanFrontCamera");
    isValid &= validation.checkEmpty(img, "vui lòng nhập link hình ảnh", "spanIMG");
    isValid &= validation.checkEmpty(type, "Hãy nhập loại sản phẩm", "spanType") && validation.checkName(type, "tên sản phẩm không đúng định dạng", "spanType");
    
    if (isValid) {
        dsProduct.capNhatSP(id, newData)
        .then(function (result) {
            // console.log(result.data);
            document.querySelector("#myModal .close").click();
            layDanhSachSanPham();
        })
        .catch(function (error) {
            console.log(error);
        })
    }
   
}