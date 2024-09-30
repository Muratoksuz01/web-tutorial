<?php

try{
    $db=new PDO("mysql:host=localhost;dbname=dersler","root","",array(
        PDO::ATTR_ERRMODE =>PDO::ERRMODE_EXCEPTION
    ));
    $db->query("SET CHARACTER SET utf8");
}catch(PDOException $para){
    echo $para->getMessage();
}

//select kısmı
// //1. yöntem 
//kotu kişi search kısmına ': DELETE FROM users 'yazarsa bu tablo gider
// $sql="SELECT * FROM users";
// $datas=$db->query($sql)->fetch(PDO::FETCH_ASSOC);//query execute gibi düşün fetcall verileri alıyor ama yazdırma kısmı d
// //ye düşün fetch_assoc ise sadece senin verdiğin dataların getirilmesi için
// print_r($datas); 



//2.yöntem bu daha güvenli bunu kullan 
//kotu kişi search kısmına ': DELETE FROM users 'yazarsa bu tablo gitmez
//$user_ıd=$_GET['ıd'];
$sql="SELECT * FROM users where id=?";
$user= $db->prepare($sql);
$user->execute([7]);
$data=$user->fetchAll(PDO::FETCH_ASSOC);
print_r($data);




//ekleme
// $sql="INSERT INTO users SET  username=?,email=?";
// $ekle=$db->prepare($sql);
// $ekleme=$ekle->execute([
//     "test4",
//     "test4@gmail.com"
// ]);

// if($ekleme) echo "veriler eklendi";
// else echo "eklenmedi";


//silme ve toplu silme
//tek tek silme 
// $sql="DELETE FROM users where id=?";
// $sil=$db->prepare($sql);
// $silme=$sil->execute([2]);
// if($silme) echo "tamam";
// else echo "hata";
//toplu silme 
// $sql="DELETE FROM users where id IN(?,?,?)";
// $sil=$db->prepare($sql);
// $silme=$sil->execute([1,3,6]);
// if($silme) echo "tamam";
// else echo "hata";




/* ara işlemler bir sıkıntı cıkarsa commite tıklamıyor*/
    // $sql="UPDATE users SET email=?,username=? where id=?";
    // $guncel=$db->prepare($sql);
    // $guncelleme=$guncel->execute(["muratoksuz20@gmail.com","murat",7]);
    // if($guncelleme) echo "tamamdır";    

    // else echo "olmadı";





