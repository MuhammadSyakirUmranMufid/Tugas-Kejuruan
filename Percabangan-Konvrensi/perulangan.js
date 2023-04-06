function jenisPercabangan () {
    let noPerulangan = document.getElementById("noPerulangan").value;
    let bilAwal = document.getElementById("bilAwal").value;
    let bilAkhir = document.getElementById("bilAkhir").value;
    let = teksPerulangan = "";
    let i = bilAwal;

    // Pemilihan Jenis Percabangan
    switch (noPerulangan) {
        // 1. Perulangan For
        case "1":
            document.getElementById("outJudul").innerHTML =
            "<h3>1. Perulangan For</h3>";
            document.getElementById("outDeskripsi").innerHTML =
            "Perulangan For Termasuk dalam counted loop , karena sudah jelas berapa kali ia akan mengulang. <hr>";

            for (i; i <= bilAkhir; i++) {
                teksPerulangan += " Perulangan For Ke  " + i + "<br>";
            }
            
            document.getElementById("outPerulangan").innerHTML = teksPerulangan;
            break;

            //2. Perulangan Foreach
        case "2":
            document.getElementById("outJudul").innerHTML = 
            "<h3>2. Perulangan Foreach</h3>";
            document.getElementById("outDeskripsi").innerHTML =
            "Perulangan Foreach biasa nya di gunakan untuk mencetak item di array, termasuk dalam perulangan counted loop karena jumlah perulangan akan ditentukan oleh panjang dari array . <hr>";

            const kalimatArray = ["aku", "tuh", "yah", "suka", "sama", "kamu"];


            for (let i = 0; i < kalimatArray.length; i++) {
                teksPerulangan += kalimatArray[i] + " ";
            }

            document.getElementById("outPerulangan").innerHTML = teksPerulangan;
            break;

            //3. Perulangan dengan Method repeat()
            case "3":
            document.getElementById("outJudul").innerHTML =
            "<h3>3. Perulangan dengan Method repeat()</h3>";
            document.getElementById("outDeskripsi").innerHTML =
            "Perulangan dengan Method atau fungsi repeat() termasuk kedalam perulangan counted loop , digunakan khusus untuk mengulang sebuah teks (string). <hr>";

            teksPerulangan = "Perulangan Method repeat <br>".repeat(bilAkhir);

            document.getElementById("outPerulangan").innerHTML = teksPerulangan

            //4. Perulangan While
            case "4":
            document.getElementById("outJudul").innerHTML =
            "<h3>4. Perulangan While</h3>";
            document.getElementById("outDeskripsi").innerHTML =
            "Perulangan while termasuk dalam perulangan uncounted loop, juga dapat menjadi perulangan counted loop dengan memberikan counter di dalamanya. <hr>";

            while (i <= bilAkhir) {
                teksPerulangan += "Perulangan While Ke" + i + "<br>";
                i++;
            }

            document.getElementById("outPerulangan").innerHTML = teksPerulangan;
            break;

            //5. Perulangan Do/While
            document.getElementById("outPerulangan").innerHTML =
            "<h3>5. Perulangan Do/While";
            document.getElementById("outDeskripsi").innerHTML =
            "Perulangan do/while biasanya sama seperti perulangan while, akan melakukan perulangan sebanyak 1 kali terlebih dahulu, lalu mengecek kondisi yang ada di dalam kurung while. <hr>";

            do {
                teksPerulangan += "Perulagan Do/While ke" + i + "<br>"
                i++;
            } while (i <= bilAkhir);

            document.getElementById("outPerulangan").innerHTML = teksPerulangan;
            break;

            default:
                document.getElementById("outJudul").innerHTML = "<h3>Pilihan Salah</h3>"

    }
}