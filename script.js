const app = document.getElementById('main');

function render(id){
  if(id === 'about'){
    app.innerHTML = `
    <div class="flex md:flex-row flex-col items-center justify-evenly w-full mt-20 gap-5">
    <div class="w-1/2 flex justify-center">
    <img src="https://www.hmifunsri.com/_next/image?url=%2Flogo.png&w=2048&q=75" alt="hmif" class="w-64  cursor-pointer duration-300 hover:scale-105 hover:rotate-6">
    </div>
    <div class="w-1/2 flex flex-col p-4">
    <h2 class="text-yellow-500 text-6xl font-bold ">HMIF UNSRI</h2>
    <p class="mt-5 text-xl">
    HMIF UNSRI (Himpunan Mahasiswa Informatika) adalah sebuah Organisasi Kemahasiswaan khusus Jurusan Teknik Informatika 
    yang bergerak dalam bidang Akademik maupun Non-Akademik yang dapat menjadi wadah bagi para Mahasiswa Jurusan Teknik Informatika.
    </p>
    </div>
    </div> 
    `;
  }else if(id === 'profile'){
    app.innerHTML = `

    <div class="bg-gray-600 text-white p-8 rounded-xl min-w-2/3">
        <h1 class="text-3xl font-semibold py-4 text-center">Departemen</h1>
        <div class="flex justify-evenly gap-20">
          <ul class="list-decimal ml-10">
            <li class="duration-300 hover:scale-105"><a href="#">Inti</a></li>
            
            <li>
              <p class="duration-300 hover:scale-105">Akademik</p>
              <ul class="list-disc ml-10">
                <li class="duration-300 hover:scale-105"><a href="#">PTI</a></li>
              </ul>
              <ul class="list-disc ml-10">
                <li class="duration-300 hover:scale-105"><a href="#">PIP</a></li>
              </ul>
            </li>
            
            <li class="duration-300 hover:scale-105"><a href="#">PSDM</a></li>
  
            <li class="duration-300 hover:scale-105"><a href="#">ADM</a></li>
            
            <li>
              <p class="duration-300 hover:scale-105">Kominfo</p>
              <ul class="list-disc ml-10">
                <li class="duration-300 hover:scale-105"><a href="#">HUMAS</a></li>
              </ul>
              <ul class="list-disc ml-10">
                <li class="duration-300 hover:scale-105"><a href="#">Multimedia</a></li>
              </ul>
            </li>
            
            <li>
              <p class="duration-300 hover:scale-105">PMB</p>
              <ul class="list-disc ml-10">
                <li class="duration-300 hover:scale-105"><a href="#">Olahraga</a></li>
              </ul>
              <ul class="list-disc ml-10">
                <li class="duration-300 hover:scale-105"><a href="#">Seni</a></li>
              </ul>
            </li>
            
            <li class="duration-300 hover:scale-105"><a href="#">KWU</a></li>
  
            <li>
              <p class="duration-300 hover:scale-105">Kastrad</p>
              <ul class="list-disc ml-10">
                <li class="duration-300 hover:scale-105"><a href="#">ADKAM</a></li>
              </ul>
              <ul class="list-disc ml-10">
                <li class="duration-300 hover:scale-105"><a href="#">POLPRO</a></li>
              </ul>
            </li>
          </ul>
          <div class="md:flex hidden justify-center items-center">
            <img src="https://www.hmifunsri.com/_next/image?url=%2Flogo.png&w=2048&q=75" alt="HMIF" class="h-64 duration-300 hover:scale-105 hover:-rotate-6">
          </div>
        </div>
      </div>
    `;  
  }else if(id === 'akademik'){
    const judul = `
    <h1 class="mt-10 text-3xl">
      STAFF AKADEMIK
    </h1>
    `;
    
    let container = document.createElement('div');
    container.className = "grid md:grid-cols-3 grid-cols-1 gap-16 mt-9";

    for(let i = 1; i <= 3; i++){
      staff.forEach(el => {
        const card = `
        <div class="flex flex-col items-center bg-gray-700 text-amber-50 rounded-xl py-8 px-4 duration-300 hover:scale-105">
          <img src="https://www.hmifunsri.com/_next/image?url=%2Flogo.png&w=2048&q=75" alt="HMIF" class="w-24">
          <ul class="">
            <li>
              <p>${el.nama}</p>
            </li>
            <li>
              <p>${el.kelas}</p>
            </li>
            <li class="mt-5">
              <a href="https://www.instagram.com/${el.ig}" class="bg-yellow-600 hover:bg-yellow-500 hover:text-gray-700 p-2 rounded-xl duration-300">@${el.ig}</a>
            </li>
          </ul>
        </div>
        `;
        container.innerHTML += card;
      });
    }

    app.innerHTML = judul;
    app.append(container);
  }else if(id === 'kontak'){
    app.innerHTML = `
    <div class="bg-gray-700 flex flex-col p-8 rounded-xl mt-40">
      <p class="text-amber-50"><span class="text-green-700">Whatsapp</span> - 081234567890</p>
      <p class="text-amber-50"><span class="text-amber-500">Instagram</span> - @hmif.unsri</p>
    </div>
    `;
  }
}

render('about');