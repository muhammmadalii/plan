const elForm = document.querySelector("#form");
const askDay = document.querySelector("#askday");
const elResult = document.querySelector("#result");
const text = document.querySelector("#text")

elForm.addEventListener("submit", (e) => {
   e.preventDefault();
 
    elResult.className = "on";
    
(askDay.value)
    switch (askDay.value){
        case "dushanba":
            text.textContent = "1 Biologiya ๐ฆ  2 Ona tili ๐    3 Informatika ๐ฅ 4 Fizika ๐ก 5 Ingliz tili ๐บ๐ธ";
            break;
        case "seshanba":
            text.textContent = "1 Algebra ๐งฎ 2 Adabiyot ๐ 3 Jismoniy tarbiya ๐โโ๏ธ 4 Tadbirkorlik ๐ธ 5 Huquq ๐งฐ";
            break;
        case "chorshanba":
            text.textContent = "1 Rus tili ๐ท๐บ, 2 Ona tili ๐, 3 Umumjahon tarixi ๐ฟ, 4 Geometriya ๐";
            break;
        case "payshanba":
            text.textContent = "1 Ingliz tili ๐บ๐ธ, 2 Fizika ๐ก, 3 Tarbiya ๐จโ๐ซ, 4 Kimyo ๐งช, 5 Algebra ๐งฎ";
            break;
        case "juma":
            text.textContent = "1 Sinf soati ๐ฐ, 2 Jismoniy madaniyat ๐งโโ๏ธ, 3 Adabiyot ๐, 4 Biologiya ๐ฆ , 5 O'zbekiston tarixi ๐ฟ, 6 Geometriya ๐";
            break;
        case "shanba":
            text.textContent = "1 CHQBT ๐โโ๏ธ, 2 Rus tili ๐ท๐บ, 3 Kimyo ๐งช, 4 Ingliz tili ๐บ๐ธ, 5 Algebra ๐งฎ";
            break;
        default:
            text.textContent = "Maktab ham dam oladi ๐";
    }
    askDay.value = null;
})
