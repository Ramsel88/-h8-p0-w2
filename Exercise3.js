
var nama = "Andre" ;
var peran = "Tabib" ;
    if(nama === "") {
        console.log("nama harus diisi");
    } 
    else if(peran=== "") {
        console.log("Halo " + nama + " pilih peranmu untuk memilih game");
    }
    else if(peran=== "Ksatria") {
        console.log("Selamat datang di Dunia Proxytia, "+ nama )
        console.log("Halo " + peran, nama + " kamu dapat menyerang dengan senjatamu!");
    }
    else if(peran=== "Tabib") {
        console.log("Selamat datang di Dunia Proxytia, "+ nama )
        console.log("Halo " + peran, nama + " kamu akan membantu temanmu yang terluka!");
    }
    else if(peran=== "Penyihir") {
        console.log("Selamat datang di Dunia Proxytia, "+ nama )
        console.log("Halo " + peran, nama + " ciptakan keajaiban yang membantu kemenanganmu!");
    }
    else if (peran==='Ksatria' || 'Tabib' || 'Penyihir') {
        console.log('Pilih Peran sebagai : Ksatria, Tabib, atau Penyihir');
        
    }