function sapXep() {
    //input: n1, n2, n3: number
    var n1 = Number(document.getElementById('num1').value);
    var n2 = Number(document.getElementById('num2').value);
    var n3 = Number(document.getElementById('num3').value);

    //output: rs(result): String
    var rs='';
    //Xử lí
    var max=n1;

    if(isNaN(n1)||isNaN(n2)||isNaN(n3)){
        alert("Dữ liệu sai")
    }else {
        if(n2>max){
            max=n2;
            if(n3>max){
                if(n3>n2){
                    max=n3;
                    rs=n1+", "+n2+", "+max;
                }
            }else{ //n3<max, n3<n2
                if(n3>n1){
                    rs=n1+", "+n3+", "+n2;
                }else{
                    rs=n3+", "+n1+", "+n2;
                }
                
            }
            
        }else{// n2<n1
            if(n3>max){
                max=n3;
                rs=n2+", "+n1+", "+max;
            }else{//n3<n1
                if(n2>n3){
                    rs=n3+", "+n2+", "+max;
                }else{// n2<n3
                    rs=n2+", "+n3+", "+n1;
                }
            }
        }
    }

    
    //in kết quả
    document.getElementById('result1').innerHTML="Kết quả: "+rs;
}

function chaoHoi() {
    //input thanhvien
    var thanhVien = document.getElementById('thanhVien').value;
    //output rs:String
    var rs="Xin chào "+thanhVien+" !!!"
    //in kết quả
    document.getElementById('result2').innerHTML=rs;
}
function demChanLe() {
    //input n1, n2, n3: number
    var n1 = Number(document.getElementById('num1b3').value);
    var n2 = Number(document.getElementById('num2b3').value);
    var n3 = Number(document.getElementById('num3b3').value);
    //output rs: String
    var rs=''
    //Xử lí
    var count=0;
    if(isNaN(n1)||isNaN(n2)||isNaN(n3)){
        rs="Dữ liệu không hợp lệ"
    }else{
        if(n1%2===0){
            count++;
        }
        if(n2%2===0){
            count++;
        }
        if(n3%2===0){
            count++;
        }
        var soLe = 3-count;
        rs="Co "+count+" so chan, "+soLe+" so le";
    }
    
    
    //in kết quả
    document.getElementById('result3').innerHTML=rs;
}

function doanTamGiac() {
    //input edge1, edge2, edge3: number
    var edge1 = Number(document.getElementById('edge1').value);
    var edge2 = Number(document.getElementById('edge2').value);
    var edge3 = Number(document.getElementById('edge3').value);
    //output:String
    var rs='';
    //Xử lí
    if(isNaN(edge1)||isNaN(edge2)||isNaN(edge3)){
        rs="Thông tin nhập phải là số"
    }else{
        if(edge1+edge2>edge3 && edge1+edge3>edge2 && edge2+edge3>edge1){
            if(edge1===edge2 && edge2===edge3){
                rs="Tam giác đều"
            }else if(edge1===edge2 || edge1=== edge3 || edge2===edge3){
                rs="Tam giác cân"
            }else if(Math.pow(edge1, 2)===(Math.pow(edge2, 2)+Math.pow(edge3, 2))||
                    Math.pow(edge2, 2)===(Math.pow(edge1, 2)+Math.pow(edge3, 2))||
                    Math.pow(edge3, 2)===(Math.pow(edge2, 2)+Math.pow(edge1, 2))){
                        rs="Tam giác vuông"
                    }
            
        }else{
            rs="Dữ liệu sai"
        }
    }
    //inn kết quả
    document.getElementById('result4').innerHTML=rs;
}