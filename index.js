const elForm = document.querySelector("#form");
const askDay = document.querySelector("#askday");
const elResult = document.querySelector("#result");


elForm.addEventListener("submit", (e) => {
   e.preventDefault();
 
    elResult.className = "on";
    
(askDay.value)
    switch (askDay.value){
        case "dushanba":
            elResult.textContent = "Biologiya, Ona tili, Inf va IKT, Fizika, Ingliz tili";
            break;
        case "seshanba":
            elResult.textContent = "Algebra, Adabiyot, Jismoniy tarbiya, Tadbirkorlik, Huquq";
            break;
        case "chorshanba":
            elResult.textContent = "Rus tili, Ona tili, Umumjahon tarixi, Geometriya";
            break;
        case "payshanba":
            elResult.textContent = "Ingliz tili, Fizika, Tarbiya, Kimyo, Algebra";
            break;
        case "juma":
            elResult.textContent = "Sinf soati, Jismoniy madaniyat, Adabiyot, Biologiya, O'zbekiston tarixi, Geometriya";
            break;
        case "shanba":
            elResult.textContent = "CHQBT, Rus tili, Kimyo, Ingliz tili, Algebra";
            break;
        default:
            elResult.textContent = "Maktab ham dam oladi 😀";
    }
    askDay.value = null;
})
